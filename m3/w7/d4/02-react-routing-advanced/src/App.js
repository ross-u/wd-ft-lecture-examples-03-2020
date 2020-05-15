import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DashboardWRedirect from "./pages/DashboardWRedirect";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/projects" component={ProjectsPage} />

          <Route path="/project-details/:id" component={ProjectDetailsPage} />

          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
