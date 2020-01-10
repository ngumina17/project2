import React, { Component } from "react";
import mealTitle from "./mealTitle";
import Image from "./Image";
import '../App.css'

class RecipeContainer extends Component {
  render() {
    return (
      <div className='card'>
        {this.props.meals.map((item, index) => {
          return (
            <a className='recipeCard' key={index} href={item.strSource}>
              <Image source={item.strMealThumb} text={item.strMeal} />
              <mealTitle title={item.strMeal} />
            </a>
          );
        })}
      </div>
    );
  }
}

export default RecipeContainer;
