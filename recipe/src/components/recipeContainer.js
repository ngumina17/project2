import React, { Component } from "react";
import MealTitle from "./MealTitle";
import Image from "./Image";
import './recipeContainer.css'

class RecipeContainer extends Component {
  render() {
    return (
      <div className='card'>
        {this.props.meals.map((item, index) => {
          return (
            <a className='recipeCard' key={index} href={item.strSource}>
              <Image className='recipeImage' source={item.strMealThumb} text={item.strMeal} />
              <MealTitle title={item.strMeal} />
            </a>
          );
        })}
      </div>
    );
  }
}

export default RecipeContainer;
