import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import {ping} from './enhancers/ping';


export default function configureStore(initialState) {
    const logger = createLogger();
    const middleware = [logger, ping];
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );

    return store
}