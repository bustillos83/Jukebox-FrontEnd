// import React from "react";
import pic from "../images/juke7.png";
import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu";
import Hamburger from "hamburger-react";
import Login from "./Login";
import SignUpModel from "./SignUpModel";

import React, { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <img src={pic} />
      <h1>Jukebox </h1>
      <div className="links-container">
        <Login />
        <SignUpModel />
      </div>

            <img src={pic}/>
                <h1>Jukebox </h1>
               
                <div className='login-modal'>
                <Login/>
                </div>
                
                <div className='signup-modal'>
                <SignUp/>
                </div>
              
                <div className='hamburgerIcon' onClick={handleClick}>
                <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                <div className="hamburger" >
                
                {!isOpen ? (
                    console.log("closed")
                    
                ) 
                : (<HamburgerMenu  /> )
                }
                
                
                </div>
        </div>
           

        )
    }




export default Navbar;
