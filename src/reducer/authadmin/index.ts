import {
    Error,
    LOGIN_ADMIN,
    LOGIN_ADMIN_ERROR,
    LOGIN_ADMIN_SUCCESS,
    TypeLoginAdmin,
    MessageSuccess,
} from 'saga/authadmin/types';
export interface InnitStateLoginAdmin {
    isLoging: Boolean; //true ->login , false ->logout
    error: Error | null;
    success: MessageSuccess | null;
    loading: Boolean;
}
const innitStateLoginAdmin: InnitStateLoginAdmin = {
    isLoging: false,
    loading: false,
    error: null,
    success: null,
};
const LoginAdmin = (
    state: InnitStateLoginAdmin = innitStateLoginAdmin,
    action: TypeLoginAdmin
) => {
    switch (action.type) {
        case LOGIN_ADMIN:
            return { ...state, loading: true };
        case LOGIN_ADMIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null,
                isLoading: false,
            };
        case LOGIN_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                success: action.payload,
                isLoading: true,
            };
        default:
            return { ...state };
    }
};
export default LoginAdmin;
