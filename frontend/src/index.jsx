import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DefaultLayout from './pages';
// import App from './test';
import './style.scss';

import store from './redux/createStore';

ReactDOM.render(
  <Provider store={store}>
    <DefaultLayout />
  </Provider>
  , document.getElementById('root'));
