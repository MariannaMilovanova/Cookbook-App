import { call, put, takeEvery } from 'redux-saga/effects';
import { getRecipe, updateRecipe } from './recipeAPI';

function* getRecipeById(action) {
    try {
        const recipe =  yield call(getRecipe, action.id);
        yield put({ type: "FETCH_RECIPE_SUCCESS", recipe: recipe});
    } catch (err) {
        console.log(e);
        yield put({ type: "FETCH_RECIPE_FAILED", message: e.message});
    }
}

function* updateRecipeById(action) {
    try {
        const recipe =  yield call(updateRecipe, action );
        yield put({ type: "UPDATE_RECIPE_SUCCESS", recipe: recipe});
    } catch (err) {
        console.log(e);
        yield put({ type: "UPDATE_RECIPE_FAILED", message: e.message});
    }
}

function* recipeSaga() {
     yield takeEvery("FETCH_RECIPE", getRecipeById);
     yield takeEvery("UPDATE_RECIPE", updateRecipeById);
}

export default recipeSaga;