import {
    Movie,
    POST_MOVIE,
    POST_MOVIE_ERROR,
    POST_MOVIE_SUCCESS,
    PostMovie,
    PostMovieError,
    PostMovieSuccess,
} from './types';
export const postMovie = (): PostMovie => {
    return {
        type: POST_MOVIE,
    };
};
export const postMovieSuccess = (payload: Movie[]): PostMovieSuccess => {
    return {
        type: POST_MOVIE_SUCCESS,
        payload,
    };
};
export const postMovieError = (error: object): PostMovieError => {
    return {
        type: POST_MOVIE_ERROR,
        payload: error,
    };
};
