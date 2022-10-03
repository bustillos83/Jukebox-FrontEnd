import React from "react";
import pic from '../images/juke8.png'
import "./Navbar.css"
import Login from './Login'
import Register from "./Register"
import Hamburger from "./HamburgerMenu";
import  { useState } from "react"

function Navbar() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    
    const handleClick = () => {
        setHamburgerOpen(!hamburgerOpen);
      };
        return(
            <>
            <div className="navbar">
            <img src={pic}/>
                <h1>Welcome to Jukebox </h1>
                <div className="links-container">
                <Login/><a href="#">|</a><Register/>
                </div>
                <div className="hamburger" onClick={handleClick}>
                    <Hamburger />
                </div>
            </div>
            </>
        )
    }




export default Navbar