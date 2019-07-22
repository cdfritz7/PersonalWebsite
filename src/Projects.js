import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import MyProjectList from './MyProjectList.js';

class MyCard extends Component{
  render(){
    return (
      <div>
        <Card bg="light" style={{ radius: "0px", width: '24vw'}}>
          <Card.Img variant="top" src={require('./imgs/star_background.jpg')} />
          <Card.Body>
            <Card.Title>
              {this.props.title}
            </Card.Title>
            <Card.Text>
              {this.props.text}
              {this.props.github_url}
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
                        key={i}/>);
    }

    return (
      <div>
        <CardGroup>
          {cards}
        </CardGroup>
      </div>
    );
  }
}

export default Projects
