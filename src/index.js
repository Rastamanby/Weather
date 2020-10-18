import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from './components/app';
import * as serviceWorker from './serviceWorker';
import { store } from './store';

import './index.css';

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();