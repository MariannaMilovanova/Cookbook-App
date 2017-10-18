import React from 'react';
import NewRecipeForm from './newRecipeForm';
import NewRecipePhoto from './newRecipePhoto'

const NewRecipe = (props) => {
  return (
    <div className = "new-recipe-wrapper">
        <div className='recipe-form-header'>Add Your New Recipe</div>
        <NewRecipePhoto />
        <NewRecipeForm />
    </div>
  )
}
export default NewRecipe