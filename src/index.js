import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <App name='Tina'/>,
    document.getElementById('root')
);


registerServiceWorker();
