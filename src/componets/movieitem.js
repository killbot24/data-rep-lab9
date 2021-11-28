import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
export class MovieItem extends React.Component {//Returns below text when called,
    constructor(){
        super();
        this.DeleteMovie=this.DeleteMovie.bind(this);//Saves id of movie
    }
    DeleteMovie(e){
        e.preventDefault();
        console.log("Delete: "+this.props.movie._id);
        axios.delete('http://localhost:4000/api/movies/'+this.props.movie._id)//Sends to server movie to be deleted
        .then(()=>{
            this.props.ReloadData();//Reloads data
        })
        .catch((error)=>{console.log(error+" error in delete")});//Shows error
    }
    //Link puts over to create while saveing the id of that movie
    render() {
        return (
            <div>
                <Card>
                    <Card.Header> <h4>{this.props.movie.Title}</h4></Card.Header> 
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img> 
                            <p>{this.props.movie.Year}</p>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/"+this.props.movie._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>


            </div>
            //Creates a card for movie
            //Sets info as title,img,year
            //Has button to delete movie by id
        );
    }
}