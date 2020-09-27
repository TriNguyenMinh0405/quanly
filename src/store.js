import thunk from 'redux-thunk';
import { rootSaga } from './saga';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';
import reducer from 'reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;
