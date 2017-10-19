import { call, put, takeEvery } from 'redux-saga/effects';
import { getRecipes } from './homeApi';

function* getAllRecipes() {
    try {
        const recipes =  yield call(getRecipes);
        yield put({ type: "GET_ALL_RECIPES_SUCCESS", recipes: recipes});
    } catch (err) {
        console.log(e);
        yield put({ type: "GET_ALL_RECIPESE_FAILED", message: e.message});
    }
}

function* homePageSaga() {
    yield takeEvery("GET_ALL_RECIPES", getAllRecipes);
}

export default homePageSaga;