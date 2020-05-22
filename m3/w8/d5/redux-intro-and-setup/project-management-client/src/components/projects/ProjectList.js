// components/projects/ProjectList.js

import React, { Component } from 'react';
import axios from 'axios';
import AddProject from './AddProject';
import Project from './Project';

import { connect } from 'react-redux';


class ProjectList extends Component {

  getAllProjects = () => {
    axios.get(`http://localhost:5000/api/projects`).then(response => {
      // this.setState({ listOfProjects: response.data });

      this.props.addAllProjects(response.data)

    });
  };

  componentDidMount() {
    this.getAllProjects();
  }

  render() {
    const listOfProjects = this.props.projects; // projects from the redux store

    return (
      <div>
        <AddProject updateProjectList={this.getAllProjects} />
        <div>
          {listOfProjects &&
            listOfProjects.map(project => {
              return <Project projectData={project} key={project._id} />;
            })}
        </div>
      </div>
    );
  }
}

// Here we describe what is the data we want to read from Redux
// We select and add that data to the props of current component (ProjectList in this case)
const mapStateToProps = (reduxState) => {
  return {
    projects: reduxState.projects // inject prop `projects` ( this.props.projects ) with data from `reduxState.projects`
  }
}


// Here we create functions on the props that dispatch actions with data to Redux store
const mapDispatchToProps = (dispatch) => {
  return {
    addAllProjects: function (arrayOfProjects) {      // this.props.addAllProjects
      dispatch({ type: 'ADD_ALL_PROJECTS', payload: arrayOfProjects })
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)

