export const LOGIN_HOME = 'LOGIN_HOME';
export const LOGIN_HOME_SUCCESS = 'LOGIN_HOME_SUCCESS';
export const LOGIN_HOME_ERROR = 'LOGIN_HOME_ERROR';
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
export interface LoginHome {
    type: typeof LOGIN_HOME;
    payload: User;
}
export interface LoginHomeSuccess {
    type: typeof LOGIN_HOME_SUCCESS;
    payload: MessageSuccess;
}
export interface LoginHomeError {
    type: typeof LOGIN_HOME_ERROR;
    payload: Error;
}
export type TypeLoginHome = LoginHome | LoginHomeSuccess | LoginHomeError;
