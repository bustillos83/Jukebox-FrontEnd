import React, { Component } from "react";
import pic from '../images/juke6.png'

class Navbar extends Component {
    render () {
        return(
            <div className="navbar">
            <img src={pic}/>
                <h1>Welcome to Jukebox </h1>
                <a href="#"> Login </a>
                <a href="#"> |</a>
                <a href="#"> Register </a>
            </div>
            
        )
    }
}

export default Navbar