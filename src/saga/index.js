import { fork } from 'redux-saga/effects';
import { watchAddProduct } from './movie';
export function* rootSaga() {
    yield fork(watchAddProduct);
}
