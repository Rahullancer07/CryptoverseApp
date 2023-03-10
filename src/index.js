import React from 'react'
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './App/store';
import 'antd/dist/antd.css';

ReactDom.render(
    <Router>
        {/* Provider is used so that every component in App have access to store. */}
        <Provider store={store}> 
            <App />
        </Provider>
    </Router>
    , document.getElementById('root'));