import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    name: 'Sarah'
  }

  render() {

    return(
      <div>
        <h1>Hello {this.state.name} </h1>
        <h3>Welcome to {this.props.city }</h3>
      </div>
    )
  }
}


export default MyComponent;