import React from 'react';
import SingleRecipe from './recipe';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router';
import img from '../../../../images/recipes-list.png';
import addRecipe from '../../../../images/icon-add-recipe.png';
import './recipe.scss';

const RecipesList = (props) => {
  return (
    <div className = 'recipes-list-wrapper'>
        <div className = 'recipes-list-header'>
            <Image centered src={img}/>
            <Link to='/recipe'>
                <div className='add-recipe'>
                    <Image size='small' src={addRecipe}/>
                </div>
            </Link>
        </div>
        <div className = 'recipes-list-container'>
            <SingleRecipe />
            <SingleRecipe />
        </div>
    </div>
  )
}

export default RecipesList