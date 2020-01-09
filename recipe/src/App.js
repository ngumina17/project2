import React, { Component } from "react";
import "./App.css";
// import Form from './components/Form'
import Header from "./components/Header";
import axios from "axios";
import RecipeContainer from "./components/recipeContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: {}
    };
  }
  componentDidMount() {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    axios
      .get(url)
      .then(res => {
        const meal = res.data.meals;
        if (typeof meal === "object") {
          this.setState({ meal });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    var data = this.state.meal;
    return (
      <div className="App">
        {/* <Header /> */}
        {data.length > 0 && <RecipeContainer meals={data} />}
      </div>
    );
  }
}
export default App;



