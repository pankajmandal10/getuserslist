import React from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "./component/Navbar";
import Profile from "./component/Profile";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";


const NavBar = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Profile" component={Profile}>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavBar;
