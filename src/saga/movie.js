import { take, call } from 'redux-saga/effects';
export function* watchAddProduct() {
    yield take('GET_LIST_API');
    console.log('da show oppo');
    const ca = yield call(() => {
        return fetch(
            'https://5dce9e2175f9360014c2601d.mockapi.io/api/productThunk'
        ).then((response) => response.json());
    });
    console.log(ca);
}
