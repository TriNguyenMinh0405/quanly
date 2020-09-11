import { combineReducers } from 'redux';
import movie from './reduceMovie';
import user from './admin/user';
const reducer = combineReducers({
    movie,
    user,
});
export default reducer;
