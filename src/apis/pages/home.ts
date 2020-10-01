import axios from 'axios';
const http = axios.create({
    baseURL: 'http://movie0706.cybersoft.edu.vn/api/',
});
export const postMovie = async () => {
    try {
        const httpPost = await http.get(
            'QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
        );
        return httpPost.data;
    } catch (error) {
        throw error.response.data;
    }
};
