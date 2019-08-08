import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

class Resume extends Component {
  render(){
    return (
      <div>
        <Container style={{margin: "0vw", padding: "0", minWidth:"100%"}}>
          <Row style={{margin: "1vw"}}>
            <Col className="d-flex justify-content-center" xs={12} style={{margin: "0vw", padding: "0"}}>
              <Image style={{borderWidth: '1.5vw',
                           borderStyle: 'solid',
                           maxHeight: "120vh",
                           maxWidth: "100vw",
                           borderColor: "#343B42"}}
                   src={require('./imgs/tech_resume_connor.png')} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Resume;
