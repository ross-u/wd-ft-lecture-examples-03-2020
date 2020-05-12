import React from "react";
import "./App.css"; // with React CSS files are imported directly into the .js file

import MyComponent from "./MyComponent";
import Profile from "./Profile";

import ReactPlayer from "react-player";

const profile = {
  name: "aaa",
  avatarImg: "aaa.jpg",
  email: "aaa",
};

const cityObj = {
  cityName: "Bobland",
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> React props </h1>

        <MyComponent city="Barcelona" />
        <MyComponent />

        <Profile user={profile} city={cityObj.cityName} />

        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />

        <ReactPlayer url="https://vimeo.com/channels/top/76979871" />

        <ReactPlayer url="https://www.youtube.com/watch?v=kJQP7kiw5Fk" />

        {/*  
        props represent atributtes set on the component
      	and are used to pass data to the component from the outside  
      */}
      </div>
    );
  }
}

export default App;
