import React, {Component} from 'react';

class FrontPage extends Component {
  render(){
    return (
      <div className="bg">
        <img src={require("./imgs/leaf_background.jpg")} className="bg_img"/>
        <div className="centered largeText">Welcome to my Website!</div>
      </div>

     );
  }

}

export default FrontPage;
