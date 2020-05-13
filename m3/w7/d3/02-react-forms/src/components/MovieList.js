// src/components/MovieList.js
import React, { Component } from "react";
import Card from "./Card";
import AddMovie from "./AddMovie";
import data from './../data'


class MovieList extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: data,
      showMovies: true
    };
  }

  toggleMovies = () => {
    this.setState({ showMovies: !this.state.showMovies });
  };

  deleteMovie = id => {
    const moviesCopy = this.state.movies.filter(oneMovie => oneMovie.id !== id);
    this.setState({ movies: moviesCopy });
  };

  addOneMovie = (newMovieObj) => {
    const moviesCopy = [...this.state.movies];
    // moviesCopy.push(newMovieObj)
    moviesCopy.unshift(newMovieObj)

    this.setState( { movies: moviesCopy} )
  }

  render() {

    return (
      <div>
        <h1>Movie List</h1>

        <AddMovie createMovie={this.addOneMovie} />

        <button onClick={this.toggleMovies}>Toggle Movies</button>

        <ul>
          {
            this.state.showMovies
              ? this.state.movies.map((oneMovie) => {
                  return (
                    <Card
                      key={oneMovie.id}
                      {...oneMovie}
                      clickToDelete={this.deleteMovie}
                    />
                  );
                })
              : null
          }
        </ul>
      </div>
    );
  }
}

export default MovieList;
