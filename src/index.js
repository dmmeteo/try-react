import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import {Router, Route, hashHistory} from 'react-router'

const initialState = [
    'Smells like spirit',
    'Enter sendman'
];

function repos(state = initialState, action) {
    if (action.type === 'ADD_REPOS') {
        return [
            ...state,
            action.name
        ];
    }
    return state
}
const store = createStore(repos);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
