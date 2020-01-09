import React, { Component } from 'react';
import axios from "axios";
import Header from './Header';
import RecipeContainer from "./recipeContainer";
import {Route, Switch } from 'react-router-dom';



class Home extends Component {
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
            {data.length > 0 && <RecipeContainer meals={data} />}
          </div>
   
        );
      }
    }




export default Home;

