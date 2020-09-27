export const getListMovieApi = () => {
    return (dispatch) => {
        return fetch(
            'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
        )
            .then((response) => response.json())
            .then((data) => {
                console.log('hkdhd');
                return dispatch({
                    type: 'GET_LIST_MOVIE',
                    payload: data,
                });
            });
    };
};
