import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/wrappers/App';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Add our style
import './assets/style/index.css';

// Edit for check trigger in jenkins test 2
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
