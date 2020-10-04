import { all } from 'redux-saga/effects';
import { watchLoginAdmin } from './authadmin';
import { watchLoginHome } from './authhome';
export function* rootSaga() {
    yield all([watchLoginAdmin(), watchLoginHome()]);
}
