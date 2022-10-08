import React, { Component } from 'react'

// create edit form component - when user clicks on edit a small form pops up under the favorite item on the list

export class Favorites extends Component {
    constructor(){
        super()
        this.state = {
            type: "",
            name: ""
        }
    }

    // function to handle select change 
    handleSelect = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    // function to handle form change
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    // function to handle form submit 
    handleSubmit = (event) => {

    }

    render() {
    
        return (
            <div>
                 <select name="type" id="type" form="favorites-form" onChange={this.handleSelect}>
                    <option value="artist">Artist</option>
                    <option value="album">Album</option>
                    <option value="song">Song</option>
                </select>
                <form id="favorites-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"
                        onChange={this.handleChange}
                        onSubmit={this.onSubmit}
                        />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Favorites
