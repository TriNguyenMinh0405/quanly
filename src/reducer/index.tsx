import movie from './home/movie';
import user from './admin/user';
import login from './pages/user/login';
import { combineReducers } from 'redux';
const reducer = combineReducers({
    movie,
    user,
    login,
});
export type RootState = ReturnType<typeof reducer>;
export default reducer;
