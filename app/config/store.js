import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const store = compose(
    applyMiddleware(
        thunk,
        logger
    ))(createStore)(rootReducer);

export default store;
