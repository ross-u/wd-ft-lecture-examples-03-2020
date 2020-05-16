import React, { Component } from 'react'
import axios from 'axios';
import AddProject from './../components/AddProject'

class ProjectsPage extends Component {
  state = {
    listOfProjects: []
  }

  componentDidMount() {
    this.getAllProjects()
  }


  getAllProjects = () => {
    axios.get('http://localhost:5000/api/projects')
      .then((apiResponse) => {
        console.log('apiResponse.data :>> ', apiResponse.data);
        this.setState({ listOfProjects: apiResponse.data })
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>PROJECTS PAGE</h1>
        <AddProject getAllProjects={this.getAllProjects} />
        {
          this.state.listOfProjects.map((project) => {
            return (
              <div key={project._id} className="project">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ProjectsPage
