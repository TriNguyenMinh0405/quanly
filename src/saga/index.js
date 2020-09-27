import { all } from 'redux-saga/effects';
import { watchAddProduct } from './movie';
import { watchPostData } from './pages/login';
import { watchLoginAdmin } from './authadmin';
export function* rootSaga() {
    yield all([watchAddProduct(), watchPostData(), watchLoginAdmin()]);
}
