import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {IoIosArrowDown} from "react-icons/io";
import { IconContext } from "react-icons";

class FrontPage extends Component {
  render(){
    return (
      <div>
        <div className="bg">
          <img src={require("./imgs/leaf_background.jpg")} className="bg_img"/>
          <div className="centered largeText">
            Welcome to my Website!
            <IconContext.Provider value={{className: "fadeInAndOut" }}>
            <div><IoIosArrowDown /></div>
            </IconContext.Provider>
          </div>
        </div>

        <Container style={{padding:'0px'}} fluid>
          <Row style={{margin:'1vw'}} className="justify-content-around">
            <Col xs={12} sm={6} md={5} lg={3} style={{padding:'0px'}}>
              <Image src={require("./imgs/profile_pic.jpg")}
                     style={{maxWidth:'100%', display: 'flex', justifyContent: 'center'}}
                     rounded/>
            </Col>
            <Col xs={12} sm={6} md={7} lg={9} style={{padding:'0px'}}>
              <Jumbotron style={{margin: '0px', padding: "48px"}}>
                <h1 className="largeText2">
                  Hi! My Name is Connor
                </h1>
                <p className="mediumText">
                  I'm a Computer Engineering major studying at the
                  University of Texas at Austin, specializing in data science and software engineering.
                  I'm passionate about building and learning new things.
                  Right now, I'm working on learning more about modern
                  web applications and machine learning.
                  <br />
                  <br />

                  I'm most comfortable with python, because I've used it in most of
                  the positions I've held so far. However, I also have experience in
                  Java, Javascript, C, C++, and HTML/CSS from independent and
                  school related projects.

                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row style={{margin:'1vw'}}>
            <Col xs={12} style={{padding:'0px'}}>
            <Jumbotron style={{padding: "48px"}}>
              <h1 className="largeText2">
                About This Site
              </h1>
              <p className="mediumText">
                I built this site with ReactJS and react-bootstrap to showcase some of
                the projects I've worked on.
                You can nagivate over to the 'Projects' tab to look at some of these,
                or switch over to the 'Resume' tab to take a look at my formal
                resume.
                The 'Contact' tab has my contact info and some links to my
                github, linkedin and leetcode profiles.
                If you have any questions or suggestions for improvements,
                feel free to contact me using the information on the 'Contact'
                page (email works best).
              </p>
            </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>

     );
  }

}

export default FrontPage;
