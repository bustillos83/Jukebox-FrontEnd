// import React from "react";
import pic from "../images/juke7.png";
import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu";
import Hamburger from "hamburger-react";
import Login from "./Login";
import SignUpModel from "./SignUpModel";
import './Navbar.css'
import React, { useState } from "react";

function Navbar(props) {
  const [isOpen, setOpen] = useState(false);
//   const [isMusicState, noMusicState] = useState(true)

  const handleClick = () => {
    setOpen(!isOpen);
};


  return (
    <div className="navbar">
      <img src={pic} />
      <a href="/" onClick={props.goHome}>Jukebox</a>
      {/* <button onClick={props.redirectHome}><h1>Jukebox </h1></button> */}
      <div className="links-container">
          <a href="/favorites">Favorites</a>
          {/* <button onClick={props.goToFavorites}>Favorites List</button> */}
        {/* <Login />
        <SignUpModel /> */}
      </div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className="hamburger" onClick={handleClick}>
        {!isOpen ? console.log("closed") : <HamburgerMenu />}
      </div>
    </div>
  );
}

export default Navbar;
