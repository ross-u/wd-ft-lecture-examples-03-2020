//	components/DashboardWRedirect.js

import React, { Component } from 'react'
import { Route, Redirect } from 'react-router';


class DashboardWRedirect extends Component {
  state = { loggedIn: true };		// Create a state for Login status
  

	//	Helper method which returns either Dashboard elements or <Redirect>
  checkIfLogged = () => {
    if (this.state.loggedIn) {
      return(
        <div>
          <h1>Dashboard With redirect</h1>
          <img src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif" alt="dashboard-gif"/>
        </div>)
        
    } else { return <Redirect to="/error" /> };
  }
  

  render() {
    return (<Route exact path="/" render={this.checkIfLogged}/>)
  }
}

export default DashboardWRedirect;