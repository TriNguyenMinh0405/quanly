const initState = {
    user: '',
};
const user = (state = initState, action) => {
    switch (action.type) {
        case 'GET_LIST_USER': {
            console.log(action.payload);
            return { ...state, user: action.payload };
        }
        default:
            return { ...state };
    }
};
export default user;
