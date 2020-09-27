import http from '../../index';
export type user = {
    email: string;
    password: string;
};
export const postLogin = async (param: user) => {
    try {
        const httpPost = await http.post('users/login', param);
        return httpPost.data;
    } catch (error) {
        throw error.response.data;
    }
};
