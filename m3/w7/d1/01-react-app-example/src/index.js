// index.js injects the React app code into the DOM

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the root component

ReactDOM.render(
  <App />,
  document.getElementById("root")
);