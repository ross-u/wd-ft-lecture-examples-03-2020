import React from 'react'

function User(props) {
  return (
    <div style={ { backgroundColor: props.theColor } } >
      <h2> Hello, {props.firstName}</h2>
      <img src={props.image} alt="" width="250" height="250"/>
    </div>
  )
}

export default User
