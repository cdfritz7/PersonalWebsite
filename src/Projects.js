import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MyProjectList from './MyProjectList.js';

class MyCard extends Component{
  render(){
    return (
      <div>
        <Card bg="light" style={{ radius: "0px" , width: '450px', margin:'1vw'}}>
          <Card.Img variant="top" src={require('./imgs/star_background.jpg')} />
          <Card.Body>
            <Card.Title style={{ borderBottom: "1px solid grey" }}
                        className="darkText mediumLargeText">
              {this.props.title}
            </Card.Title>
            <Card.Text className="darkText smallText">
              {this.props.text}
            </Card.Text>
            <Card.Text className="darkText smallText">
              {'Tools: '+this.props.tools}
            </Card.Text>
            <Button variant="dark"
                    onClick={
                      ()=>document.location.href=this.props.github_url
                    }>Github
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

class Projects extends Component {
  //pull in information from some file, which will be our database, to make
  //these cards
  //file will contain picture, title, description, and github link
  render(){

    let myProjects = new MyProjectList();
    var cards = [];

    for (let i = 0; i < myProjects.list.length; i++){
      const proj = myProjects.list[i];
      cards.push(<MyCard title={proj.name}
                        text={proj.desc}
                        github_url={proj.github}
                        img={proj.img}
                        tools={proj.tools}
                        key={i}/>);
    }

    return (
      <div>
        <Container style={{maxWidth:"100%", margin:"0px"}}>
          <Row className="justify-content-around">
            <CardColumns style={{maxWidth:"100%"}}>
              {cards}
            </CardColumns>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects
