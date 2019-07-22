import React, {Component} from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import FrontPage from "./FrontPage.js";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './index.css'

//Define the routing region
  /*
    The hasrouter proveds foundation the the Navigation
    and browser history handling we need for back buttons.


    route component contains a path prop, this determines
    when the route acivates, when the route activates,
    the component specified is rendered.

    the <Route extact .. the exact prop ensires that
    the route is active only if the path is an exact match for
    what is being loaded
    }

    <Navbar bg="light" expand="lg">
    <Navbar.brand><NavLink exact to="/">Home</NavLink></Navbar.brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="#home"><NavLink to="/Projects">Projects</NavLink></Nav.Link>
      <Nav.Link href="#link"><NavLink to="/Resume">Resume</NavLink></Nav.Link>
      <Nav.Link href="#link"><NavLink to="/Contact">Contact</NavLink></Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>

  */
class Main extends Component{
  render(){
    return (
      <HashRouter>
        <div>
          <Navbar bg="dark" expand="lg" sticky="top">
          <Navbar.Brand><NavLink exact to="/">Home</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link ><NavLink to="/Projects">Projects</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/Resume">Resume</NavLink></Nav.Link>
            <Nav.Link ><NavLink to="/Contact">Contact</NavLink></Nav.Link>
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
