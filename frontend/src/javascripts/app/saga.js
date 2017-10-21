import { all, fork } from 'redux-saga/effects';
import homePageSaga from '../components/homePage/homeSaga';
import newRecipeSaga from '../components/newRecipe/newRecipeSaga';
import recipeSaga from '../components/recipeDetails/recipeSaga';

export default function* root() {
    yield all([
        fork(homePageSaga),
        fork(newRecipeSaga),
        fork(recipeSaga)
    ]);
}