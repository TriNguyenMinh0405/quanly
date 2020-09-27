import {
    LOGIN_ADMIN,
    LOGIN_ADMIN_ERROR,
    LOGIN_ADMIN_SUCCESS,
    MessageSuccess,
    Error,
    User,
    LoginAdmin,
    LoginAdminError,
    LoginAdminSuccess,
} from './types';
export const loginAdmin = (user: User): LoginAdmin => {
    return {
        type: LOGIN_ADMIN,
        payload: user,
    };
};
export const loginAdminSuccess = (
    success: MessageSuccess
): LoginAdminSuccess => {
    return {
        type: LOGIN_ADMIN_SUCCESS,
        payload: success,
    };
};
export const loginAdminError = (error: Error): LoginAdminError => {
    return {
        type: LOGIN_ADMIN_ERROR,
        payload: error,
    };
};
