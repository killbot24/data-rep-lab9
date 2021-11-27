import React from 'react';
import { Movies } from './movies';
import axios, { Axios } from 'axios'
export class Read extends React.Component {//Returns below text when called
    constructor(){
        super();
        this.ReloadData=this.ReloadData.bind(this);
    }
    state = {
        movies: []

    };
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')//Pulls from server
            .then(
                (response) => {
                    this.setState({ movies: response.data})
                })
            .catch(
                (error) => { console.log(error) }
            )

    }
    render() {
        return (
            <div>
                <h1>This is the read Component</h1>
                <Movies movies={this.state.movies} ReloadData={this.ReloadData}></Movies>

            </div>
            // Runs movies.js that then runs movieitem that for each new movie creates a card and fills in needed info
        );
    }
    ReloadData(){//Reloads data
        axios.get('http://localhost:4000/api/movies')//Pulls from server
        .then(
            (response) => {
                this.setState({ movies: response.data})
            })
        .catch(
            (error) => { console.log(error) }
        )
    }
}