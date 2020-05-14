import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      counter: 0,
      counterId: null
    }
    console.log('M 1 - CONSTRUCTOR');
  }

  render() {
    console.log('M / U 2 - IN RENDER');

    return (
      <div>
        <h1>{this.state.title}</h1>

        <h2>Current Time</h2>
        <p>{this.props.currentTime}</p>

        <h2>Counter:</h2>
        <p>{this.state.counter}</p>
      </div>
    )
  }

  componentDidMount() {
    console.log('M 3 - IN COMPONENT DID MOUNT');
   
    // When component is displayed in the DOM, start the counter
    const counterId = setInterval(()=> {
      this.setState({ counter: this.state.counter + 1 })
    }, 1000);


    this.setState( { title: this.props.startTitle, counterId: counterId } ) // Causes the update
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('U 2 - IN COMPONENT DID UPDATE ');
    // It is commonly used to check if there was any change 
    // in the props or the state during update

    if (prevProps.currentTime !== this.props.currentTime) {
      console.log(' \n \n RECEIVED NEW PROPS  \n \n');
    }

  }

  componentWillUnmount() {
    console.log('\n \n XXXX IN COMPONENT WILL UNMOUNT ');

    clearInterval(this.state.counterId);
  }

}

export default Clock
