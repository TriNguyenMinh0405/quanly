import {
    TypeLoginHome,
    LOGIN_HOME,
    LOGIN_HOME_ERROR,
    LOGIN_HOME_SUCCESS,
    Error,
    MessageSuccess,
    User,
} from './types';
export const loginHome = (user: User): TypeLoginHome => {
    return {
        type: LOGIN_HOME,
        payload: user,
    };
};
export const loginHomeSuccess = (data: MessageSuccess): TypeLoginHome => {
    return {
        type: LOGIN_HOME_SUCCESS,
        payload: data,
    };
};
export const loginHomeError = (error: Error): TypeLoginHome => {
    return {
        type: LOGIN_HOME_ERROR,
        payload: error,
    };
};
