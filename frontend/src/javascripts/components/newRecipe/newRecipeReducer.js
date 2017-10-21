import { LOCATION_CHANGE } from 'react-router-redux';
let initialState = {};

const newRecipe = (state = initialState, action) => {
     switch (action.type) {
        case "UPLOAD_PHOTO_SUCCESS":
            return {...state, ...{newPhoto: action.photo.photo}};
        case LOCATION_CHANGE:
            return {...state, ...{newPhoto: null}};
        default:
            return state;
    }
};

export default newRecipe;