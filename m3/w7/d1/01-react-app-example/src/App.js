// App is referred to as Root component

import React from "react";
import Profile from "./Profile";
import Apartment from "./Apartment";
import "./App.css";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <h1>Hello Ironhackers!!!!</h1>
        <h3>React Intro</h3>
        <Profile />
        <Apartment />{" "}
        {/*  city: 'Barcelona', street: 'Carrer De Alberto Pagoria'  */}
        <Apartment /> {/*  city: 'Barcelona', street: 'Carrer De Sardenya'  */}
        <Apartment /> {/*  city: 'Barcelona', street: 'Carrer De Lalalala'  */}
      </div>
    );
  }
}

export default App;
