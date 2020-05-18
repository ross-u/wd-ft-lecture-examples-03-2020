import React from 'react';
import axios from 'axios';

// HOC starts with a wrapper function that returns a component
function Higher(WrappedComponent) {
  const mode = 'light'; //  'dark'  || 'light'

  const color = 'SkyBlue';

  const getData = () => {
    const pr = axios.get('https://api.chucknorris.io/jokes/random');
    return pr;
  }

  // HOC takes another component and injects data or functionality to it
  return function (props) {
    return (<WrappedComponent {...props} mode={mode} color={color} getData={getData} />)
  }

}


export default Higher;