import { all } from 'redux-saga/effects';
import { watchAddProduct } from './movie';
import { watchPostData } from './pages/login';
export function* rootSaga() {
    yield all([watchAddProduct(), watchPostData()]);
}
