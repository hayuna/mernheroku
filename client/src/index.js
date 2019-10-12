import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import articlesReducer from './store/reducers/articlesReducer';
import usesReducer from './store/reducers/usersReducer'; 

const rootReducer = combineReducers({
    articles: articles: articlesReducer,
    users: usersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));