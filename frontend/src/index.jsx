import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers';

import store from './redux/createStore';

ReactDOM.render(
  <Provider key="provider" store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// ReactDOM.render(<h1>Hello, world 2!</h1>, document.getElementById('root'));
