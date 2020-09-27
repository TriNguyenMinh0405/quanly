import { takeLatest, call, put } from 'redux-saga/effects';
import { LOGIN_ADMIN, LoginAdmin } from './types';
import { loginAdminSuccess, loginAdminError } from './actions';
import { postLogin } from 'apis/pages/user/login';
import { setAdminLocalStorage } from 'functions';
function* postLoginAdminSaga(action: LoginAdmin) {
    try {
        const payload = yield call(() => postLogin(action.payload));
        if (payload) {
            if (payload.user.userType !== 'admin') {
                const loi = {
                    status: '400',
                    message: 'tai khoan user khong dang nhap duoc',
                };
                throw loi;
            }
        }
        setAdminLocalStorage(payload);
        yield put(loginAdminSuccess(payload));
    } catch (e) {
        yield put(loginAdminError(e));
    }
}
export function* watchLoginAdmin() {
    yield takeLatest(LOGIN_ADMIN, postLoginAdminSaga);
}
