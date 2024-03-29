import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MyProjectList from './MyProjectList.js';

class MyCard extends Component{
  constructor(props){
    super(props)
    this.state = {imgs: this.props.imgs,
                  img: this.props.imgs[0],
                  idx: 0,
                  border_color:"#343B42"}
    this.changePicture = this.changePicture.bind(this)
    this.highlightBorder = this.highlightBorder.bind(this)
    this.dehighlightBorder = this.dehighlightBorder.bind(this)
    this.githubButton = this.githubButton.bind(this)
    this.cardImage = this.cardImage.bind(this)
  }

  changePicture(){
    let index = (this.state.idx+1)%this.state.imgs.length;
    this.setState({
      img: this.props.imgs[index],
      idx: index
    })
  }

  highlightBorder(){
    this.setState({
      border_color: "#428bca"
    });
  }

  dehighlightBorder(){
    this.setState({
      border_color: "#343B42"
    });
  }

  githubButton(){
    if(this.props.github_url!='None'){
      return(
             <Button variant="dark"
              onClick={
                ()=>document.location.href=this.props.github_url
              }>Github
              </Button>
            );
    }
  }

  cardImage(){
    if(this.state.imgs.length > 1){
      return(
        <Card.Img variant="top" style={{borderWidth: '10px',
                                        borderStyle: 'solid',
                                        borderColor: this.state.border_color}}
                                src={this.state.img}
                                onClick={this.changePicture}
                                onMouseEnter={this.highlightBorder}
                                onMouseOut={this.dehighlightBorder}/>
      )
    }else{
      return(
        <Card.Img variant="top" style={{borderWidth: '10px',
                                        borderStyle: 'solid',
                                        borderColor: this.state.border_color}}
                                src={this.state.img}/>
      )
    }
  }

  render(){
    return (
      <div>
        <Card bg="light" className="my-card-width" style={{ radius: "0px" }}>
          {this.cardImage()}
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
            {this.githubButton()}
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
                        imgs={proj.imgs}
                        tools={proj.tools}
                        key={i}/>);
    }

    return (
      <div>
          <CardColumns style={{maxWidth:"98%"}}>
            {cards}
          </CardColumns>
      </div>
    );
  }
}

export default Projects
