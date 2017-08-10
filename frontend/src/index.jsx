import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DefaultLayout from './common/layouts';

import jquery from 'jquery';
import metismenu from 'metismenu';
import bootstrap from 'bootstrap';
import '../node_modules/animate.css/animate.min.css';
import './style.scss';

import store from './redux/createStore';

require('font-awesome/css/font-awesome.css');

ReactDOM.render(
  <Provider store={store}>
    <DefaultLayout />
  </Provider>
  , document.getElementById('root'));
