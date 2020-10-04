import loginAdmin from './authadmin';
import loginHome from './authhome';
import { combineReducers } from 'redux';
const reducer = combineReducers({
    loginAdmin,
    loginHome,
});
export type RootState = ReturnType<typeof reducer>;
export default reducer;
