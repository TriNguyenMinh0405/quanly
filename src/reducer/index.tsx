import movie from './home/movie';
import user from './admin/user';
import { combineReducers } from 'redux';
const reducer = combineReducers({
    movie,
    user,
});
export type RootState = ReturnType<typeof reducer>;
export default reducer;
