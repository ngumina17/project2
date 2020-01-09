import React, { Component } from "react";
import "./App.css";
// import Form from './components/Form'
import Header from "./components/Header";
import axios from "axios";
import RecipeContainer from "./components/recipeContainer";

class App extends Component {
  render () {
    return (
        <>
        <Header />
        <div className = 'homeText'>  
            <p>Welcome to Food Therapy.</p>
            <br></br>
            <p>Please click the recipes button above to take you to a list of delicious recipes!</p>
        </div>
        </>
    )
}
}
export default App;



