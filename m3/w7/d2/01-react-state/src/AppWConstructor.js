import React from 'react';
import './App.css';
import User from './components/User'

// In React components re-render in one of two situation:
// 1. By updating the `state` of the class component 
// 2. By passing new or updated props to the component


// React components refresh/rerender on change of state or props

class AppWConstructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userA: {
        firstName: "Maxime",
        image: "https://www.w3schools.com/howto/img_avatar.png",
        theColor: 'cornflowerblue'
      },
      userB: {
        firstName: "Uros",
        image: "https://www.w3schools.com/howto/img_avatar.png",
        theColor: 'purple'
      },
      defaultColor: props.defaultColor,
      clickCount: 0
    }

    // We should use the contructor block when:
    //  1. Binding the methods to the component
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    //  2. Setting the default `state` from the props - ( NOT A GOOD THING / ANTI-PATTERN)
  }


  handleButtonClick () { 
    // you should not change the state object directly
    // this.state.clickCount++;
    const updatedCount = this.state.clickCount + 1;

    this.setState( { clickCount: updatedCount } )
  }

  handleColorChange () {
    const newColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

    this.setState( { defaultColor: newColor } )
  }


  render () {
    return (
      <div className="App">
        <h3>Click Count: {this.state.clickCount}</h3>
        <button onClick={ this.handleButtonClick } >1+</button>
        <br/>
        <button onClick={ this.handleColorChange } >CHANGE COLOR</button>


        <User 
          firstName={this.state.userA.firstName}
          image={this.state.userA.image}
          theColor={this.state.defaultColor}
        />

        <User 
          firstName={this.state.userB.firstName}
          image={this.state.userB.image}
        />
    </div>
  );
  }
}

export default AppWConstructor;
