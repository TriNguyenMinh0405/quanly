export const POST_LOGIN = 'POST_LOGIN';
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';
export const POST_LOGIN_ERROR = 'POST_LOGIN_ERROR';
export interface User {
    email: string;
    password: string;
}
export interface DataSuccess {
    message: string;
    user: { email: string; fullName: string; userType: string };
    token: string;
}
export interface DataError {
    message: string;
    status: string;
}
export interface User {
    email: string;
    password: string;
}
interface PostLoginAction {
    type: typeof POST_LOGIN;
    data: User;
}
interface PostLoginSuccessAction {
    type: typeof POST_LOGIN_SUCCESS;
    data: DataSuccess;
}
interface PostLoginErrorAction {
    type: typeof POST_LOGIN_ERROR;
    error: DataError;
}
export type UserActionTypes =
    | PostLoginAction
    | PostLoginSuccessAction
    | PostLoginErrorAction;
