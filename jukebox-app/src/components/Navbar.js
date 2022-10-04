import React from "react";
import pic from '../images/juke8.png'
import "./Navbar.css"
import NavModal from './Modal'
import Signup from './Signup'
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
                <NavModal/>
                </div>
                <div className="hamburger" onClick={handleClick}>
                    <Hamburger />
                </div>
            </div>
            </>
        )
    }




export default Navbar