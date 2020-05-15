import React, { Component } from 'react'

class addFood extends Component {
  state = {
    name: '',
    calories: '',
    image:''
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

    const newFood = this.state;
    this.props.createFood(newFood)

    // Reset the form by resetting the values in the state
    this.setState({
      name: '',
      calories: '',
      image:''
    })
  }

  render() {


    return (
      <div className="addFood">
        <form onSubmit={this.handleSubmit} >
          <label className="label">Name: </label>
          <input type="text"  className="input" name="name" value={this.state.name}  onChange={this.handleInput} />
          <br/>

          <label className="label">Calories: </label>
          <input type="number" className="input" name="calories" value={this.state.calories} onChange={this.handleInput} />
            <br/>

          <label className="label">Picture: </label>
          <input type="file" className="input" name="image" value={this.state.image} onChange={this.handleInput} />

          <br/>
          <button type="submit" className="button">Add Food</button>

        </form>
      </div>
    )
  }
}

export default addFood