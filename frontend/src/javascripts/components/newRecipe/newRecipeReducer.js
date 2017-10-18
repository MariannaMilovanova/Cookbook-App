let initialState = {}

const newRecipe = (state = initialState, action) => {
     switch (action.type) {
        case 'UPLOAD_PHOTO_SUCCESS' :
            return {...state, ...{newPhoto: action.photo.photo}}
        default:
            return state
    }
}

export default newRecipe