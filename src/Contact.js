import React from 'react'
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class Contact extends React.Component {
  render(){
    return (
      <div>
        <Card bg="light" style={{margin:"20px", maxWidth:"800px"}}>
          <Card.Body>
            <Card.Title className="darkText mediumLargeText"
                        style={{ borderBottom: "1px solid grey" }}
                        >About</Card.Title>
            <Card.Text className="darkText mediumText">
                Hi, my name is Connor. I'm an Electrical and Computer Engineering major studying at the
                University of Texas at Austin, specializing in data science and software engineering.
                <br />
                <br />

                I've worked as a data scientist in most of the positions that I've held,
                so I'm most comfortable with python. However, I also have experience in
                Java, Javascript, C, C++, and HTML/CSS from independent and
                school related projects.

                <br />
                <br />

                I built this site with ReactJS and react-bootstrap to showcase some of
                the projects I've worked on.
                If you have any questions or suggestions for improvements,
                feel free to contact me using the information below (email works best).

            </Card.Text>
          </Card.Body>
        </Card>

        <Card bg="light" style={{margin:"20px", maxWidth:"800px"}}>
          <Card.Body>
            <Card.Title className="darkText mediumLargeText"
                        style={{ borderBottom: "1px solid grey" }}
                        >Contact</Card.Title>
            <Card.Text className="darkText mediumText">
              Email: cdfritz7@gmail.com
              <br />
              Phone: 214-886-6615
            </Card.Text>
          </Card.Body>
        </Card>

        <Card bg="light" style={{margin:"20px", maxWidth:"800px"}}>
          <Card.Body>
            <Card.Title className="darkText mediumLargeText"
                        style={{ borderBottom: "1px solid grey" }}>
                        Other Links!</Card.Title>
            <Card.Text className="darkText mediumText">
              <Button variant="primary"
                      onClick={
                        ()=>document.location.href="https://github.com/cdfritz7"
                      }
                      style={{margin:'1vw', backgroundColor:'#428bca'}}
                      size='lg'
                      >Github
              </Button>
              <Button variant="primary"
                      onClick={
                        ()=>document.location.href="https://www.linkedin.com/in/connor-d-fritz/"
                      }
                      style={{margin:'1vw', backgroundColor:'#428bca'}}
                      size='lg'
                      >LinkedIn
              </Button>
              <Button variant="primary"
                      onClick={
                        ()=>document.location.href="https://leetcode.com/hummingbats/"
                      }
                      style={{margin:'1vw', backgroundColor:'#428bca'}}
                      size='lg'
                      >LeetCode
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    )
  }
}
export default Contact
