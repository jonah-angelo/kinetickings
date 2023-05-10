import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import reducers from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(compose(applyMiddleware(thunk)));


root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)