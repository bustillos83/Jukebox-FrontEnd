
// import React from "react";
import pic from '../images/juke7.png'
import "./Navbar.css"
import HamburgerMenu from "./HamburgerMenu";
import Hamburger from 'hamburger-react'
import Login from './Login'
import SignUp from './SignUp'


import React, { useState } from "react";




function Navbar() {

    const [isOpen, setOpen] = useState(false)
    
    const handleClick = () => {
        setOpen(!isOpen);
      };
        return(
        <div className="navbar">

            <img src={pic}/>
                <h1>Welcome to Jukebox </h1>
                <div className="links-container">
                <Login/>
                <SignUp/>
                </div>
                
                <Hamburger toggled={isOpen} toggle={setOpen} />
                <div className="hamburger" onClick={handleClick}>
                
                {!isOpen ? (
                    console.log("closed")
                    
                ) 
                : (<HamburgerMenu  /> )
                }
                
                
                </div>
        </div>
           

        )
    }




export default Navbar

