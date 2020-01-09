import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="rHeader">
        <Link to='/'>
        <h1>Food Therapy</h1>
        </Link>
      </div>
     
    );
  }
}

export default Header;
