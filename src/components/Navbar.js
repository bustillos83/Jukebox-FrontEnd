// import React from "react";
import pic from "../images/juke7.png";
import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu";
import Hamburger from "hamburger-react";
import Login from "./Login";
import SignUpModel from "./SignUpModel";
import './Navbar.css'
import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

function Navbar(props) {
  const [isOpen, setOpen] = useState(false);

  let history = useHistory()

  const handleClick = () => {
    setOpen(!isOpen);
};

// function for Jukebox header to go back to homepage (App.js)

const goHome = () => {
    console.log("go home:", history)
    // history.push("/")
  }

  return (
    <div className="navbar">
      <img src={pic} />
      <a onClick={goHome}><h1>Jukebox</h1></a>
      <div className="links-container">
        <Login />
        <SignUpModel />
      </div>

      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className="hamburger" onClick={handleClick}>
        {!isOpen ? console.log("closed") : <HamburgerMenu />}
      </div>
    </div>
  );
}

export default Navbar;
