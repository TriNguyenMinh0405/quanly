import { takeLatest, call, put } from 'redux-saga/effects';
import {
    POST_LOGIN,
    postLoginSuccess,
    postLoginError,
} from 'actions/pages/login';
import { postLogin } from 'apis/pages/user/login';
function* postDataSaga(action: any) {
    try {
        const payload = yield call(() => postLogin(action.data));
        yield put(postLoginSuccess(payload));
    } catch (e) {
        yield put(postLoginError(e));
    }
}
export function* watchPostData() {
    yield takeLatest(POST_LOGIN, postDataSaga);
}
