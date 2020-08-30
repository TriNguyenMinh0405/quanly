import thunk from 'redux-thunk';
import { rootSaga } from './saga';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
