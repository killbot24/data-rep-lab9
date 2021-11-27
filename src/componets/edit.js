import React from 'react';
import axios, { Axios } from 'axios';
export class edit extends React.Component {//Returns below text when called
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: '',

        }

    }

    componentDidMount(){//Fires when compoent is active
        console.log(this.props.match.params.id);
        axios.put('http://localhost:4000/api/movies/'+this.props.match.params.id)
        .then(response=>{
            this.setState({//saves input
                _id:response.data._id,
                Title:response.data.Title,
                Year:response.data.Year,
                Poster:response.data.Poster
            })
        })
        .catch((error)=>{console.log(error+" Error in mount")});//Shows error
    }
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        })
    }
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        })
    }
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        alert("Movie:" + this.state.Title + " " + this.state.Year + " " + this.state.Poster+" "+this.state._id);
        const newMovie={
            Title:this.state.Title,
            Year:this.state.Year,
            Poster:this.state.Poster,
            _id: this.state._id
        }
        axios.put('http://localhost:4000/api/movies/'+this.state._id,newMovie).then(res=>{//Sends id,body to server
            console.log(res.data._id)
        }).catch((error)=>{console.log(error+" Error in submit")});//Shows error
    }
    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Movie Title</label>
                        <input type='text' className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Year</label>
                        <input type='text' className='form-control' value={this.state.Year} onChange={this.onChangeYear}></input>
                    </div>
                    <div className='form-group'>
                        <label>Add Movie Poster</label>
                        <input type='text' className='form-control' value={this.state.Poster} onChange={this.onChangePoster}></input>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Edit Movie' className='btn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }
}