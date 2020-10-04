import {
    Error,
    LOGIN_HOME,
    LOGIN_HOME_ERROR,
    LOGIN_HOME_SUCCESS,
    TypeLoginHome,
    MessageSuccess,
} from 'saga/authhome/types';
export interface InnitStateLoginHome {
    isLoging: Boolean; //true ->login , false ->logout
    error: Error | null;
    success: MessageSuccess | null;
    loading: Boolean;
}
const innitStateLoginHome: InnitStateLoginHome = {
    isLoging: false,
    loading: false,
    error: null,
    success: null,
};
const LoginHome = (state = innitStateLoginHome, action: TypeLoginHome) => {
    switch (action.type) {
        case LOGIN_HOME:
            return { ...state, loading: true };
        case LOGIN_HOME_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: null,
                isLoading: false,
            };
        case LOGIN_HOME_SUCCESS:
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
export default LoginHome;
