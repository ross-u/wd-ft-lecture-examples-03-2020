import React from "react";
import "./App.css"; // with React CSS files are imported directly into the .js file


const footerEl = <footer>I am a footer</footer>;


class App extends React.Component {
  state = {
    name: 'Uros Cirkovic',
    // avatar: 'https://i.imgur.com/iFe8f8v.jpg'
  }


  formatName (name) {
    return name.toUpperCase();
  }
  
  displayAvatar (userObj) {
    if (userObj.avatar) {
      return <img src={userObj.avatar} alt=""/>
    }
    else if (!userObj.avatar) {
      return <h3>No Image Available</h3>
    }
  }

  render() {
    return (
      <div className="App">
        <h1> Hello { this.formatName(this.state.name) } </h1>
        { this.displayAvatar(this.state)  }
        <h3> React Intro - JSX </h3>

        <p> { 4 + 4 } </p>
        { footerEl }
      </div>
    );
  }
}


export default App;
