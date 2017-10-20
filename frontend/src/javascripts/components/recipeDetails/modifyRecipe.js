import React from 'react';
import NewRecipe from '../newRecipe/newRecipe';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { uploadPhoto } from '../newRecipe/newRecipeActions';
import { updateRecipe } from './recipeActions';
import RecipePhoto from '../recipeForm/recipePhoto';
import RecipeForm from '../recipeForm/recipeForm';

const ModifyRecipe = (props) => {
    if(!props.currentRecipe) {
        return <div className='loading'>Loading...</div>
    }
    return (
        <div className = "new-recipe-wrapper">
            <Header className='modify-header' color='brown' as='h2' textAlign='center'>Here you can modify recipe: {props.currentRecipe.title}</Header>
            <RecipePhoto 
                uploadPhoto={props.uploadPhoto}
                newPhoto={props.newPhoto}
                currentRecipe={props.currentRecipe}
                exitModifyMode={props.exitModifyMode}
            />
            <RecipeForm 
                exitModifyMode={props.exitModifyMode}
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