import React, {Component} from 'react';

class FrontPage extends Component {
  render(){
    return (
      <div className="bg">
        <img src={require("./imgs/leaf_background.jpg")} className="bg_img"/>
        <div className="centered">Title</div>
      </div>

     );
  }

}

export default FrontPage;