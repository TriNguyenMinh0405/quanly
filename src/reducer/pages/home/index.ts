import {
    POST_MOVIE,
    POST_MOVIE_ERROR,
    POST_MOVIE_SUCCESS,
    Movie,
    TypeActionsMovie,
} from 'saga/pages/home/types';
interface InitState {
    data: Movie[] | null;
    loading: boolean;
    error: object | null;
}
const initState: InitState = {
    data: null,
    loading: false,
    error: null,
};
const movieHome = (state: InitState = initState, action: TypeActionsMovie) => {
    switch (action.type) {
        case POST_MOVIE:
            return {
                ...state,
                loading: true,
            };
        case POST_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            };
        case POST_MOVIE_ERROR:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload,
            };
        default:
            return { ...state };
    }
};
export default movieHome;
