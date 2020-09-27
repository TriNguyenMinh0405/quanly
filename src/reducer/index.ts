import movie from './home/movie';
import user from './admin/user';
import login from './pages/user/login';
import loginAdmin from './authadmin';
import { combineReducers } from 'redux';
const reducer = combineReducers({
    movie,
    user,
    login,
    loginAdmin,
});
export type RootState = ReturnType<typeof reducer>;
export default reducer;
