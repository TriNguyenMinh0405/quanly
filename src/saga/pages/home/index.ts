import { POST_MOVIE } from './types';
import { postMovieError, postMovieSuccess } from './actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { postMovie } from 'apis/pages/home';
function* postMovieSaga() {
    try {
        const payload = yield call(() => postMovie());
        yield put(postMovieSuccess(payload));
    } catch (error) {
        yield put(postMovieError(error));
    }
}
export function* watchPostMovie() {
    yield takeLatest(POST_MOVIE, postMovieSaga);
}
