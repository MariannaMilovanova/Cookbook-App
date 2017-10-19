import React from 'react';
import NewRecipe from '../newRecipe/newRecipe';
import { connect } from 'react-redux';
import { uploadPhoto } from '../newRecipe/newRecipeActions';
import { updateRecipe } from './recipeActions';
import RecipePhoto from '../newRecipe/newRecipePhoto';
import RecipeForm from '../newRecipe/newRecipeForm';

const ModifyRecipe = (props) => {
    if(!props.currentRecipe) {
        return <div className='loading'>Loading...</div>
    }
    return (
        <div className = "new-recipe-wrapper">
            <div className='recipe-form-header'>Modify {props.currentRecipe.title}</div>
            <RecipePhoto 
                uploadPhoto={props.uploadPhoto}
                newPhoto={props.newPhoto}
                currentRecipe={props.currentRecipe}
            />
            <RecipeForm 
                currentRecipe={props.currentRecipe}
                newPhoto={props.newPhoto}
                updateRecipe={props.updateRecipe}
            />
        </div>
  )
}

const mapStateToProps = (state) => {
    return ({
        newPhoto: state.newRecipe.newPhoto
    })
}

const mapDispatchToProps = {
   uploadPhoto,
   updateRecipe
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModifyRecipe);