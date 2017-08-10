import { createStore, applyMiddleware, compose } from 'redux';
import {
  syncHistoryWithStore,
  routerMiddleware as createRouterMiddleware,
} from 'react-router-redux';
import promiseMiddleware from './middlewares/promiseMiddleware';
import loggerMiddleware from './middlewares/loggerMiddleware';

import rootReducer, { history } from './modules/root';

const routerMiddleware = createRouterMiddleware(history);
const middlewares = [routerMiddleware, promiseMiddleware, loggerMiddleware];

// Enhance createStore with middlewares. Order matters here
const enhancedCreateStore = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
)(createStore);

// Create the store
const store = enhancedCreateStore(rootReducer);

syncHistoryWithStore(history, store);

export default store;
