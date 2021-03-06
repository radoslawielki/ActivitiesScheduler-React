import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from './app/reducers'
import App from './app/App';

const store = createStore(rootReducer)
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
