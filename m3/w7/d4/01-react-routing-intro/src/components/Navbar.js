import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = {
    username: 'YOUR NAME'
  } 

  render() {
    return (
      <nav id='navbar'>
        <ul>



          <NavLink exact activeClassName="selected-link" to="/">Dashboard</NavLink>
          <NavLink activeClassName="selected-link" to="/contact">Contact</NavLink>
          <NavLink activeClassName="selected-link" to="/about">About</NavLink>

        {/* 
          <Link to="/">Dashboard</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link> 
          */}

        </ul>

        <div className="nav-details">
          <p className="nav-username">{this.state.username}</p>
        </div>
      </nav>
    )
  }
}

export default Navbar;
