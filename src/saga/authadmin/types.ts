export const LOGIN_ADMIN = 'LOGIN_ADMIN';
export const LOGIN_ADMIN_SUCCESS = 'LOGIN_ADMIN_SUCCESS';
export const LOGIN_ADMIN_ERROR = 'LOGIN_ADMIN_ERROR';
export interface MessageSuccess {
    message: string;
    user: object;
    token: string;
}
export interface Error {
    status: string;
    message: string;
}
export interface User {
    email: string;
    password: string;
}
export interface LoginAdmin {
    type: typeof LOGIN_ADMIN;
    payload: User;
}
export interface LoginAdminSuccess {
    type: typeof LOGIN_ADMIN_SUCCESS;
    payload: MessageSuccess;
}
export interface LoginAdminError {
    type: typeof LOGIN_ADMIN_ERROR;
    payload: Error;
}
export type TypeLoginAdmin = LoginAdmin | LoginAdminSuccess | LoginAdminError;
