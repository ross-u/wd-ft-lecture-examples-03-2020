import React, { Component } from 'react';

import { Route, Redirect } from 'react-router';

class DashboardWRedirect extends Component {
  state = {
    isLoggedIn: true
  }

  displayDashboard = () => {
    if (this.state.isLoggedIn) {
      return (
        <div>
        <h1>DashboardWRedirect</h1>
        <img src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif" alt="dashboard-gif"/>
      </div>
      )
    }
    else {
      return <Redirect to="/login" />
    }
  }

  render() {
    return <Route exact path="/" render={this.displayDashboard} /> 
  }
}

export default DashboardWRedirect