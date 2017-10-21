import { LOCATION_CHANGE } from 'react-router-redux';
let initialState = {
    modifyMode: false
};

const recipeDetails = (state = initialState, action) => {
     switch (action.type) {
        case "FETCH_RECIPE_SUCCESS" :
            return {...state, ...{currentRecipe: action.recipe}};
        case "UPDATE_RECIPE_SUCCESS" :
            return {...state, ...{currentRecipe: action.recipe}};
        case "EXIT_MODIFY_MODE" :
            return {...state, ...{modifyMode: !state.modifyMode}};
        case LOCATION_CHANGE:
            return {...state, ...{modifyMode: false}};
        default:
            return state;
    }
}

export default recipeDetails;