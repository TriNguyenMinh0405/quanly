const initState = {
    movie: [],
};
const movie = (state = initState, action) => {
    switch (action.type) {
        case 'GET_LIST': {
            return { ...state };
        }
        case 'GET_LIST_MOVIE': {
            return { ...state, movie: action.payload };
        }
        default:
            return { ...state };
    }
};
export default movie;
