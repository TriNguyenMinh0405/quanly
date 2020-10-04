import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_HOME, LoginHome } from './types';
import { loginHomeSuccess, loginHomeError } from './actions';
import { postLogin } from 'apis/pages/user/login';
import { setHomeLocalStorage } from 'functions';
function* postLoginHomeSaga(action: LoginHome) {
    try {
        const payload = yield call(() => postLogin(action.payload));
        setHomeLocalStorage(payload);
        yield put(loginHomeSuccess(payload));
    } catch (e) {
        yield put(loginHomeError(e));
    }
}
export function* watchLoginHome() {
    yield takeLatest(LOGIN_HOME, postLoginHomeSaga);
}
