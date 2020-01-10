import React, { Component } from "react";
import '../App.css'

class mealTitle extends Component {
  render() {
    return <h2 className = 'Title'>{this.props.title}</h2>;
  }
}

export default mealTitle;
