import { AnyAction } from 'redux';
import {
    POST_LOGIN,
    POST_LOGIN_SUCCESS,
    POST_LOGIN_ERROR,
} from 'actions/pages/login';
interface initState {
    data: any;
    isLogin: boolean;
    error: any;
    isLoading: boolean;
}
const initialState: initState = {
    data: '',
    isLogin: false,
    error: '',
    isLoading: false,
};
const login = (
    state: initState = initialState,
    action: AnyAction
): initState => {
    switch (action.type) {
        case POST_LOGIN:
            return { ...state, isLoading: true };
        case POST_LOGIN_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false,
                isLogin: true,
                error: '',
            };
        case POST_LOGIN_ERROR:
            return {
                ...state,
                data: '',
                isLoading: false,
                isLogin: false,
                error: action.error,
            };
        default:
            return { ...state };
    }
};
export default login;
