import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { uploadPhoto } from './newRecipeAPI';

function* uploadRecipePhoto(action) {
    try {
        let photo =  yield call(uploadPhoto, action.data);
        yield put({ type: "UPLOAD_PHOTO_SUCCESS", photo: photo});
    } catch (err) {
        console.log(e);
        yield put({ type: "UPLOAD_PHOTO_FAILED", message: e.message});
    }
}

function* newRecipeSaga() {
    yield takeEvery("UPLOAD_PHOTO", uploadRecipePhoto);
}

export default newRecipeSaga;