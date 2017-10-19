import React from 'react';
import SingleRecipe from './recipe';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router';
import img from '../../../../images/recipes-list.png';
import './recipe.scss';

const RecipesList = (props) => {
    let recipes = [...props.recipes];
    return (
        <div className = 'recipes-list-wrapper'>
            <div className = 'recipes-list-header'>
                <Image centered src={img} size='large'/>
                <Link to='/recipe'>
                    <div className='add-recipe-wrapper'>
                        <div className='add-recipe'>
                            + Add new recipe
                        </div>
                    </div>
                </Link>
            </div>
            <div className = 'recipes-list-container'>
                {recipes.map((recipe, i)  => {
                    return <SingleRecipe recipe={recipe} key={recipe._id}/>
                    })
                }
            </div>
        </div>
  )
}

export default RecipesList