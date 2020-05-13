// src/App.js
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import './App.css'
import data from './data';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>

        <MovieList moviesArray={data} />
      </div>
    );
  }
}

export default App;