import React from 'react';
import { connect } from 'react-redux';
import { uploadPhoto, addNewRecipe } from './newRecipeActions';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router';
import logo from './../../../images/cookbook-logo.png';
import RecipeForm from '../recipeForm/recipeForm';
import RecipePhoto from '../recipeForm/recipePhoto';
import './newRecipe.scss'

const NewRecipe = (props) => {
  return (
    <div className = "new-recipe-wrapper">
        <Link to='/'>
            <div className='logo'>
                <Image src={logo} size='medium' />
            </div>
        </Link>
        <div className='recipe-form-header'>Add Your New Recipe</div>
        <RecipePhoto 
            uploadPhoto={props.uploadPhoto}
            newPhoto={props.newPhoto}
        />
        <RecipeForm 
            newPhoto={props.newPhoto}
            addNewRecipe={props.addNewRecipe}
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
   addNewRecipe
 }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewRecipe);