import { all } from 'redux-saga/effects';
import { watchAddProduct } from './movie';
import { watchPostData } from './pages/login';
import { watchLoginAdmin } from './authadmin';
import { watchPostMovie } from './pages/home';
export function* rootSaga() {
    yield all([
        watchPostMovie(),
        watchAddProduct(),
        watchPostData(),
        watchLoginAdmin(),
    ]);
}
