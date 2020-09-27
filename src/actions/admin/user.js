export const getListUserApi = () => {
    return (dispatch) => {
        return fetch(
            'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=1&soPhanTuTrenTrang=10'
        )
            .then((response) => response.json())
            .then((payload) => {
                console.log(payload);
                return dispatch({
                    type: 'GET_LIST_USER',
                    payload,
                });
            });
    };
};
