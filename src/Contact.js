import React from 'react'
import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

class Contact extends React.Component {
  render(){
    return (
      <div>
        <Tabs style={{margin:"20px"}} className="darkText mediumLargeText"
              defaultActiveKey="About" id="uncontrolled-tab-example">
          <Tab eventKey="About" title="About">
              <Card style={{margin:"20px", maxWidth:"800px"}}>
                <Card.Text className="darkText mediumText"
                           style={{padding:"20px"}}>
                Hi, my name is Connor. I'm an Electrical and Computer Engineering major studying at the
                University of Texas at Austin.
                </Card.Text>
              </Card>
          </Tab>

          <Tab eventKey="Contact" className="darkText mediumLargeText" title="Contact">
            <Card style={{margin:"20px", maxWidth:"800px"}}>
              <Card.Text className="darkText mediumText"
                         style={{padding:"20px"}}>
              Email: cdfritz7@gmail.com
              <br />
              Phone: 214-886-6615
              <br />
              LinkedIn: example.com
              </Card.Text>
            </Card>
          </Tab>

          <Tab eventKey="Other Links!" className="darkText mediumLargeText" title="Another">
            <Card style={{margin:"20px", maxWidth:"800px"}}>
              <Card.Text className="darkText mediumText"
                         style={{padding:"20px"}}>
              Stack Overflow:
              <br />
              GitHub:
              <br />
              LeetCode:
              <br />
              </Card.Text>
            </Card>
          </Tab>
        </Tabs>
      </div>
    )
  }
}
export default Contact
