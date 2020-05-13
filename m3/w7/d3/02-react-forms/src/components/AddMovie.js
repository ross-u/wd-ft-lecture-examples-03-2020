import React, { Component } from 'react'

class AddMovie extends Component {
  state = {
    title: '',
    director: '',
    hasOscars: false,
    rating: 1
  }
  
  handleInput = (e) => {
    let { name, value, type } = e.target;

    // Check if the input is of type checkbox
    if( type === 'checkbox') {
      value = e.target.checked;
    }

    this.setState( { [name]: value } )
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = this.state;
    this.props.createMovie(newMovie)

    // Reset the form by resetting the values in the state
    this.setState({
      title: '',
      director: '',
      hasOscars: false,
      rating: 1
    })
  }

  render() {


    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <label>Title: </label>
          <input type="text" name="title" value={this.state.title}  onChange={this.handleInput} />
          <br/>

          <label>Director: </label>
          <input type="text" name="director" value={this.state.director} onChange={this.handleInput} />
          <br/>

          <label>Has Oscars: </label>
          <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={this.handleInput} />
          <br/>

          <label>Rating: </label>
          <input type="number" name="rating" value={this.state.rating} onChange={this.handleInput} />

          <br/>
          <button type="submit">Add Movie</button>

        </form>
      </div>
    )
  }
}

export default AddMovie
