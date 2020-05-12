import React, { Component } from 'react';
import logo from './../logo.svg';
import Title from './Title'


function showImage(srcStr) {
  if (srcStr) {
    return       <img src={srcStr} alt=""/>
  }
  else return <h3>Unable to Load the Image</h3>
}

function capitalizeName (nameStr) {
  return nameStr.toUpperCase()
}

class Header extends Component {

  render() {
    return (
    <header className="App-header">
      <Title title="CRA" lname={this.props.lastname}/>

      { showImage(logo) }
      <h1 className="App-title"> 
        Welcome to React {capitalizeName(this.props.firstname + " " + this.props.lastname)}
      </h1>
      <h3>You are ready to take this to the next level!</h3>
    </header>
    )
  }
}

export default Header

export {
  showImage,
  capitalizeName
}

