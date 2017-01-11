import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import allReducers from './reducers';
const store = createStore(allReducers);
import App from './components/App';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise';
// import createLogger from 'redux-logger';


//
// const logger = createLogger();
// const store = createStore(
//     allReducers,
//     applyMiddleware(thunk, promise, logger)
// );
//

