import React from "react";
import "../App.css";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar
      collapseOnSelect
      expand="xl"
      bg="danger"
      variant="dark"
      className="nava"
    >
      <Link to="/Profile" className= "bg-dark">
              <ReactBootStrap.Nav.Link eventKey={6} href="#Profile">
                Click on Profile
              </ReactBootStrap.Nav.Link>
     </Link>
     
     </ReactBootStrap.Navbar>
     
    </div>
  );
};

export default NavBar;
