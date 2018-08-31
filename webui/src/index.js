import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MainRoute} from './components/routes/router';
import configureStore from './confStore';

const store = configureStore();
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(  <MainRoute store={store} />,
    document.getElementById('root'));
// registerServiceWorker();
