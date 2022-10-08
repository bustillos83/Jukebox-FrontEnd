// import React from "react";
import pic from "../images/juke7.png";
import "./Navbar.css";
function Navbar(props) {
  return (
    <div className="navbar">
      <img src={pic} />
      <a href="/" onClick={props.goHome}>
        <h1>Jukebox</h1>
      </a>
      <div className="links-container">
        <a href="/favorites">Favorites</a>
      </div>
    </div>
  );
}

export default Navbar;