import { combineReducers } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'

import createReducer from './router';

export const history = createBrowserHistory();

export default combineReducers({
  routing: createReducer(history),
});
