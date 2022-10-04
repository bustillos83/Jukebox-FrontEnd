// import React from "react";
import pic from '../images/juke7.png'
import "./Navbar.css"
import Hamburger from "./HamburgerMenu";

import React, { useState } from "react";


function Navbar() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    
    const handleClick = () => {
        setHamburgerOpen(!hamburgerOpen);
      };
        return(
        <div className="navbar">
            <img src={pic}/>
                <h1>Welcome to Jukebox </h1>
                <div className="links-container">
                <a href="#"> Login </a>
                <a href="#">|</a>
                <a href="#"> Register </a>
                </div>
                <div className="hamburger" onClick={handleClick}>
                <Hamburger  />
                </div>
        </div>
           
        )
    }




export default Navbar