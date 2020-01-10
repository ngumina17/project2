import React, { Component } from "react";
import '../App.css'

class MealTitle extends Component {
  render() {
    return <h2 className = 'Title'>{this.props.title}</h2>;
  }
}

export default MealTitle;
