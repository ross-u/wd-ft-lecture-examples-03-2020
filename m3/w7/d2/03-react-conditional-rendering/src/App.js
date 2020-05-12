import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList'


const arrayOfP =[
  <p>1</p>,
  <p>2</p>,
  <p>3</p>,
  <p>4</p>,
  <p>5</p>,
]

function App() {
  return (
    <div className="App">
      <Navbar />

      <MovieList />
      
      {/* { arrayOfP } */}
    </div>
  );
}

export default App;
