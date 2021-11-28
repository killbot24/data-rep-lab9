import React from 'react';
import { MovieItem } from './movieitem';
export class Movies extends React.Component{//Returns below text when called
render(){
    return this.props.movies.map( (movie)=>{
        return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>//Runs movieitem.js for each movie, Reloads data
    })
       
  
}
}