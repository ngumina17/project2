import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

 class App extends Component {
   constructor(props) {
     super(props)
     this.state={
       meals: []
     };
   }
 handleClick = (e) => {
   console.log('componentDidMount')
   fetch ('https://www.themealdb.com/api/json/v1/1/search.php?s')
   .then(res => res.json())
   .then(newRecipe => {console.log('app - newRecipe' , newRecipe)
      let strMeal = newRecipe.meals[0].strMeal
      let strInstructions = newRecipe.meals[0].strInstructions
      this.setState({strMeal})
      this.setState({strInstructions})
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
         <p>{this.state.meals}</p>
         <p>{this.state.strMeal}</p>
         <p>{this.state.strInstructions}</p>
       </div>
       <button onClick={this.handleClick}>New Recipe</button>
     </div>
   )
 }



 }

 export default App;




