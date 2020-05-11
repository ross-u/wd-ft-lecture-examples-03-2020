import React, { Component } from 'react';
import './Apartment.css'

class Apartment extends React.Component {
  render() {
    return(
      <div className="Apartment">
        <img src="https://image.flaticon.com/icons/png/512/1018/1018627.png" width="100" alt=""/>
        <div>
          <h3>Nowhere Street 123</h3>
          <h3>Hero Town</h3>
        </div>
        <div>
          <button>Info</button>
          <button>Like</button>
        </div>
      </div>
    )
  }
}


export default Apartment;