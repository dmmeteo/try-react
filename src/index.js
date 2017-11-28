import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import lessons from './lessons.json';
// import {Router, Route, hashHistory} from 'react-router'

const GET_ARTICLE_REQUEST = 'GET_ARTICLE_REQUEST';
const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS';

function articles(state = lessons, action) {
    switch (action.type) {
        case GET_ARTICLE_REQUEST:
            return {...state, lessonsData: action.payload};
        default:
            return state

    }
}
const store = createStore(articles);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
