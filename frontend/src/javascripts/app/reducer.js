import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import homePageStore from '../components/homePage/homeReducer';
import newRecipe from '../components/newRecipe/newRecipeReducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
    routing,
    homePageStore,
    newRecipe,
    form: formReducer
});