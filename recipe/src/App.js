import React, { Component } from "react";
import "./App.css";
// import Form from './components/Form;
import Header from "./components/Header";
import Home from './components/Home';
import axios from "axios";
import RecipeContainer from "./components/recipeContainer";
// import Nav from './components/Nav';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Link to="../Home">Recipes</Link>
        <div className="homeText">
          <p>Welcome to Food Therapy.</p>
          <br></br>
          <p>
            Please click the 'Recipes' link above to take you to a list of
            delicious recipes!
          </p>
        </div>
        <switch></switch>
        <Route exact path="/" component={App} />
        <Route
          path="../Home"
          render={routerProps => <Home {...this.state} {...routerProps} />}
        />
      </main>
    );
  }
}

export default App;



