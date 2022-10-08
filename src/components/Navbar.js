// import React from "react";
import pic from "../images/juke7.png";
import "./Navbar.css";
function Navbar(props) {
  return (
    <div className="navbar">
      <img src={pic} />
      <div className="links">
      <a href="/" onClick={props.goHome}>
        <h1>Jukebox</h1>
      </a>
     <a href="/favorites" className="favorites">
         <h3>Favorites</h3>
     </a>
      </div>
    </div>
  );
}

export default Navbar;
