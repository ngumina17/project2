import React, { Component } from "react";
import { Link, Router, Switch } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="rHeader">
        <h1>Food Therapy</h1>
        <Link to='/Home'>Recipes</Link>
      </div>
      

      


     
    );
  }
}

export default Header;
