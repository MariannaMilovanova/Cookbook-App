import { call, put, takeEvery } from 'redux-saga/effects';
import { uploadPhoto, postNewRecipe } from './newRecipeAPI';

function* uploadRecipePhoto(action) {
    try {
        const photo =  yield call(uploadPhoto, action.data);
        yield put({ type: "UPLOAD_PHOTO_SUCCESS", photo: photo});
    } catch (err) {
        console.log(err);
        yield put({ type: "UPLOAD_PHOTO_FAILED", message: err.message});
    }
}

function* addRecipe(action) {
    try {
        const recipe =  yield call(postNewRecipe, action);
        yield put({ type: "POST_NEW_RECIPE_SUCCESS", recipe: recipe});
    } catch (err) {
        console.log(err);
        yield put({ type: "POST_NEW_RECIPE_FAILED", message: err.message});
    }
}

function* newRecipeSaga() {
    yield takeEvery("POST_NEW_RECIPE", addRecipe);
    yield takeEvery("UPLOAD_PHOTO", uploadRecipePhoto);
}

export default newRecipeSaga;