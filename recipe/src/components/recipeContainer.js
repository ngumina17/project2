import React, { Component } from 'react';
import MealTitle from './mealTitle';
import Image from './image'

class RecipeContainer extends Component {
render() {
  return (
<div>
{this.props.meals.map((item, index) => {
  return (
<a
key={index}
href={item.strSource}>
<Image source={item.strMealThumb} text={item.strMeal} />
<MealTitle title={item.strMeal} />
</a>
  )
})}
</div>
  )
}
}

export default RecipeContainer;

