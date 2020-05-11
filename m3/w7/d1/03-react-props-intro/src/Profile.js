import React, { Component } from 'react';

class Profile extends Component {

  render() {

    console.log('what are props',);
    

    return(
      <div>
        <img src={this.props.user.avatarImg} alt="" width="100"/>
        <p>Name: {this.props.user.name}</p>
        <p>Email: {this.props.user.email}</p>
      </div>
    )
  }
}


export default Profile;