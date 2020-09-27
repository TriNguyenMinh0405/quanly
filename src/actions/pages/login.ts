import {
    UserActionTypes,
    User,
    DataSuccess,
    DataError,
} from 'types/pages/users';
export const POST_LOGIN = 'POST_LOGIN';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_ERROR = 'POST_LOGIN_ERROR';
export const postLoginRequest = (data: User): UserActionTypes => {
    return {
        type: POST_LOGIN,
        data: data,
    };
};
export const postLoginSuccess = (data: DataSuccess): UserActionTypes => {
    return {
        type: POST_LOGIN_SUCCESS,
        data,
    };
};
export const postLoginError = (error: DataError): UserActionTypes => {
    return {
        type: POST_LOGIN_ERROR,
        error,
    };
};
