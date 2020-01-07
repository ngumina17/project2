import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Route, Link } from "react-router-dom";
import Home from './Home';

 class App extends Component {
   constructor(props) {
     super(props)
     this.state={
       meals: [],
  
     };
   }
 handleClick = (e) => {
   console.log('componentDidMount')
   fetch ('https://www.themealdb.com/api/json/v1/1/search.php?s')
   .then(res => res.json())
   .then(newRecipe => {
      // let strMeal = newRecipe.meals[0].strMeal
      // let strInstructions = newRecipe.meals[0].strInstructions
      // let strIngredient = newRecipe.meals[0].strIngredient
      let meal = this.props.meals
      let mealsArr = Object.keys(meal)
      let ingredientsArr = []
      for (let i=0; i< mealsArr.length; i++) {
        const key = mealsArr[i]
        const value = meal[key]
        console.log("value" + value)
        if (value === null) {
          //do nothing
        } else if (key.includes('strIngredient')) {
          ingredientsArr.push(value)
        }
      }
      // this.setState({strMeal})
      // this.setState({strInstructions})
      // this.setState({strIngredient})
      
      })
  
 
 }

 componentDidMount () {
   this.handleClick()
 }

 render () {
   return (
     <div className="App">
       <header className='App-header'>
         <h1 className='Recipe-Name'>Recipes</h1>
       </header>
       <div>
         <p>{this.state.meal}</p>
         <p>{this.state.strMeal}</p>
         <p>{this.state.strInstructions}</p>
         <p>{this.state.ingredientsArr}</p>

       </div>
       <button onClick={this.handleClick}>New Recipe</button>
     </div>
   )
 }



 }
 
 export default App;




