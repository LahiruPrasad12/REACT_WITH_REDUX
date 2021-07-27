import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const middleware = [thunk];

//initial state ek empty tiyanna oni nisa meya mehema damai
const initialState = {};

const Store = createStore(
    rootReducer,initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENTION_&& window.__REDUX_DEVTOOLS_EXTENTION_()
    )
);

export default Store;