import React, { Component } from 'react'

// create edit form component - when user clicks on edit a small form pops up under the favorite item on the list

// select options
const options = [
    {value: 'Song', text: "Song"},
    {value: 'Album', text: "Album"},
    {value: 'Artist', text: "Artist"}
]

export class Favorites extends Component {
    constructor(props){
        super(props)
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
        event.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}/faves`, {
            method: "POST",
            body: JSON.stringify({
                type: this.state.type,
                name: this.state.name
            }),
            headers: 
                {"Content-type": "application/json"}
        }, console.log("im in the fetch", this.state))
        .then((res) => {
            if(res.ok){
                return res.json()
            }
            throw new Error(res)
        })
        .then((resJson) => {
            console.log('Form - resJson', resJson)
            this.props.addFavorite(resJson)
            this.setState({
                type: "",
                name: ""
            })
        })
        .catch((err) => {console.log(err)})
    }

    render() {
    
        return (
            <div>
                 <select name="type" id="type" value={this.state.value}
                 form="favorites-form" onChange={this.handleSelect}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
                <form id="favorites-form" 
                    onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"
                        onChange={this.handleChange}
                        />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Favorites
