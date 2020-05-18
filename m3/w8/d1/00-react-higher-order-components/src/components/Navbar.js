import React from 'react';
import logo from './../ih-logo.png'
import Higher from './../hoc/Higher'

function Navbar(props) {
  return (
    <nav className={props.mode === 'dark' ? "navbar dark" : "navbar"}>
      <img src={logo} alt="ironhack logo" width="50px" />
    </nav>
  )
}

export default Higher(Navbar)
