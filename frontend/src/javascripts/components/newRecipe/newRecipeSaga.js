import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { uploadPhoto, postNewRecipe } from './newRecipeAPI';

function* uploadRecipePhoto(action) {
    try {
        const photo =  yield call(uploadPhoto, action.data);
        yield put({ type: "UPLOAD_PHOTO_SUCCESS", photo: photo});
    } catch (err) {
        console.log(e);
        yield put({ type: "UPLOAD_PHOTO_FAILED", message: e.message});
    }
}

function* addRecipe(action) {
    try {
        const recipe =  yield call(postNewRecipe, action.data);
        yield put({ type: "POST_NEW_RECIPE_SUCCESS", recipe: recipe});
    } catch (err) {
        console.log(e);
        yield put({ type: "POST_NEW_RECIPE_FAILED", message: e.message});
    }
}

function* newRecipeSaga() {
    yield takeEvery("POST_NEW_RECIPE", addRecipe);
    yield takeEvery("UPLOAD_PHOTO", uploadRecipePhoto);
}

export default newRecipeSaga;