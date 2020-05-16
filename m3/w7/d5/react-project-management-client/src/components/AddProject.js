import React, { Component } from 'react';
import axios from 'axios';

export default class AddProject extends Component {
  state = {
    title: '',
    description: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.post(
      'http://localhost:5000/api/projects',
      { title: this.state.title, description: this.state.description }
    )
      .then(() => {
        this.setState({ title: '', description: '' })
        this.props.getAllProjects();
        // Triggers the method to get all projects 
        // which refreshes the ProjectsPage
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <h2>ADD NEW PROJECT</h2>
        <label>Title</label>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />

        <label>Description</label>
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />

        <button type="submit">Add Project</button>
      </form>
    )
  }
}
