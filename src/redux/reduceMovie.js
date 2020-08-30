const initState = {
    movie: [],
};
const movie = (state = initState, action) => {
    switch (action.type) {
        case 'GET_LIST': {
            return { ...state };
        }
        case 'GET_LIST_API': {
            return { ...state, movie: action.data };
        }
        default:
            return { ...state };
    }
};
export default movie;
