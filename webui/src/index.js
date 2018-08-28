import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Route/Router';
import configureStore from './confStore';

const store = configureStore();
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(  <Root store={store} />,
    document.getElementById('root'));
// registerServiceWorker();
