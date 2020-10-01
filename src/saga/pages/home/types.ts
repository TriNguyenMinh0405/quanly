export const POST_MOVIE = 'POST_MOVIE';
export const POST_MOVIE_SUCCESS = 'POST_MOVIE_SUCCESS';
export const POST_MOVIE_ERROR = 'POST_MOVIE_ERROR';
export interface Movie {
    maPhim: number;
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: string;
    moTa: string;
    maNhom: string;
    ngayKhoiChieu: string;
    danhGia: number;
}
export interface PostMovie {
    type: typeof POST_MOVIE;
}
export interface PostMovieSuccess {
    type: typeof POST_MOVIE_SUCCESS;
    payload: Movie[];
}
export interface PostMovieError {
    type: typeof POST_MOVIE_ERROR;
    payload: object;
}
export type TypeActionsMovie = PostMovie | PostMovieSuccess | PostMovieError;
