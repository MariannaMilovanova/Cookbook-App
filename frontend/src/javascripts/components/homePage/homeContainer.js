import React from 'react';
import Header from './header/header';
import RecipesList from './recipesList/recipesList'
import './home.scss';

const HomeContainer = (props) => {
  return (
    <div className = "home-page-wrapper">
      <Header />
      <RecipesList />
    </div>
  )
}
export default HomeContainer