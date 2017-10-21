let initialState = {
    recipes: []
}
const homePageStore = (state = initialState, action) => {
     switch (action.type) {
        case "GET_ALL_RECIPES_SUCCESS" :
            return {...state, ...{recipes: action.recipes}};
        default:
            return state;
    }
}

export default homePageStore;