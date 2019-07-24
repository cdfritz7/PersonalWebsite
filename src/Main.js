import React, {Component} from "react";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom";

import FrontPage from "./FrontPage.js";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './index.css'

class Main extends Component{
  render(){
    return (
      <HashRouter>
        <div>
          <BrowserRouter basename="/PersonalWebsite/">
          <Navbar bg="dark" expand="lg" sticky="top">
          <Navbar.Brand><NavLink className="mediumLargeText lightText" exact to="/">Home</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link ><NavLink className="mediumText lightText" to="/Projects">Projects</NavLink></Nav.Link>
            <Nav.Link ><NavLink className="mediumText lightText" to="/Resume">Resume</NavLink></Nav.Link>
            <Nav.Link ><NavLink className="mediumText lightText" to="/Contact">Contact</NavLink></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>

          <div className="content">

            <Route exact path="/" component={FrontPage}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Resume" component={Resume}/>
            <Route path="/Contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
