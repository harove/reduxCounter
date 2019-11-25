import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import counterReducer from './reducer';


const store = createStore(counterReducer, applyMiddleware(logger));

export default store;
