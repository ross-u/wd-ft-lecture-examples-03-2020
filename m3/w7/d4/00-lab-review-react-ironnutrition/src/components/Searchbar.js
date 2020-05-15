import React, { Component } from 'react'

export default class Searchbar extends Component {
    state = {
        search: ''
    }

    handleInput = (e) => {
        const {name, value} = e.target;

        this.setState( { [name]: value  }, () => {
            this.props.filterOnChange(value)
        })
    }



    render() {
        return (
            <div>
                <input
                    className="input" 
                    name="search"
                    type="text"
                    value={this.state.search}
                    onChange={this.handleInput}
                    placeholder="search for food.."
                />
            </div>
        )
    }
}
