import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="logo nav-div">Jude Clark</div>
      <div className="nav-links nav-div">
        <a href="#">About Me</a>
        <a href="#my-work">My Work</a>
        <a href="#contact-info">Contact Me</a>
      </div>
    </nav>
  );
}

export default Nav;
