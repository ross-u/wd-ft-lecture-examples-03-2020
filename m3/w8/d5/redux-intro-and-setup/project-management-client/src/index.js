import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// IMPORT REDUX
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// REDUCER
import projectReducer from './redux/reducers/project-reducer';


// CREATE REDUX STORE
const store = createStore(
  projectReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ACTIONS
const addProject1 = { type: "ADD_PROJECT", payload: "P1 - Learn Redux" };
const addProject2 = { type: "ADD_PROJECT", payload: "P2 - React Native" };

const addAllProjects = { type: "ADD_ALL_PROJECTS", payload: ['p2', 'p3'] };



// DISPATCH
// store.dispatch(addProject1);
// store.dispatch(addProject2);
// store.dispatch(addAllProjects)




// PROVIDE THE REDUX STOTE TO THE APP

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
