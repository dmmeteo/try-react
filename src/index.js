import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import {Router, Route, hashHistory} from 'react-router'

function articles(state = [], action) {
    if (action.type === 'ADD_ARTICLE') {
        return [
            ...state,
            action.title
        ];
    }
    return state
}
const store = createStore(articles);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
