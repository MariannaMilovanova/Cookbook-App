import { all, fork } from 'redux-saga/effects';
import homePageSaga from '../components/homePage/homeSaga';

export default function* root() {
    yield all([
        fork(homePageSaga)
    ]);
}