import React, { Component } from 'react'
import Card from './Card';
import data from './../data';

class MovieList extends Component {
  state = {
    movies: data
  }


  deleteTheMovie = (id) => {
    const updatedMovies = this.state.movies.filter( (movie) => {
      if (movie._id !== id) return movie;
    });

    this.setState({ movies: updatedMovies })
  }

  render() {

    return (

      <ul>
      {
        this.state.movies.map((movieObj) => {
          return(
            <Card 
              key={movieObj._id} 
              {...movieObj}
              removeMovie={this.deleteTheMovie}  
              />)
          })
      }
      </ul>
    )
  }
}

export default MovieList
