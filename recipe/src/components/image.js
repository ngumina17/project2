import React, { Component } from "react";
// import'../App.css'
import './Image.css'

class Image extends Component {
  render() {
    return (
      <div className = 'picture'>
    <img src={this.props.source} alt={this.props.text} />;
    </div>
    )
  }
}

export default Image;
