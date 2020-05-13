import React, { Component } from 'react'
import Card from './Card';
import data from './../data';

class MovieList extends Component {
  state = {
    movies: data,
    showMovies: true
  }


  deleteTheMovie = (id) => {
    // Filter the movies list to return back all movies that don't include the id of the movie to delete
    const updatedMovies = this.state.movies.filter( (movie) => {
      if (movie._id !== id) return movie;
    });

    this.setState({ movies: updatedMovies })
  }

  toggleMovieList = () => {
    // 
    this.setState( { showMovies: !this.state.showMovies } )
  }

  render() {

    return (

      <div>
        <button onClick={this.toggleMovieList} > Toggle Movies </button>

      {
        !this.state.showMovies
          ? null
          : <ul>
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
      }
        
      </div>
    )
  }
}

export default MovieList
