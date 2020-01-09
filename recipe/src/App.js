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
  render () {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/'>
        <div className = 'appText'>  
            <p>Welcome to Food Therapy</p>
            <br></br>
            <p>Please click the 'Recipes' link below to take you to a list of delicious recipes!</p>
            <nav>
              <Link to='/recipes'>Recipes</Link>
            </nav>
        </div>
        </Route>
        <Route exact path="/recipes" component={Home} />
        </Switch>
      </>
       
    )
}
}


export default App;



