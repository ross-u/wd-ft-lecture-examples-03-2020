import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// <Router>  `BrowserRouter` is a React router root component
// <Route>   is used to specify which component will be rendered for each `path`

import DashboardPage from "./pages/DashboardPage";
import DashboardPageWRedirect from "./pages/DashboardPageWRedirect";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";

import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          {/* <Route path="/" component={DashboardPage} exact /> */}
          <Route path="/" component={DashboardPageWRedirect} exact />

          <Route path="/about" component={AboutPage} exact />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} />


          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
