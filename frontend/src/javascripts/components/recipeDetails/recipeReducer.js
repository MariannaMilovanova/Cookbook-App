let initialState = {}

const recipeDetails = (state = initialState, action) => {
     switch (action.type) {
        case "FETCH_RECIPE_SUCCESS" :
            return {...state, ...{currentRecipe: action.recipe}}
        default:
            return state
    }
}

export default recipeDetails