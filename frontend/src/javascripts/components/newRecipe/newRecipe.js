import React from 'react';
import { connect } from 'react-redux';
import { uploadPhoto } from './newRecipeActions';
import NewRecipeForm from './newRecipeForm';
import NewRecipePhoto from './newRecipePhoto';

const NewRecipe = (props) => {
  return (
    <div className = "new-recipe-wrapper">
        <div className='recipe-form-header'>Add Your New Recipe</div>
        <NewRecipePhoto 
            uploadPhoto={props.uploadPhoto}
            newPhoto={props.newPhoto}
        />
        <NewRecipeForm 
            newPhoto={props.newPhoto}
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
   uploadPhoto
 }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewRecipe);