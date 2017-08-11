import { combineReducers } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory';
import season from './season';
import league from './league';

import createReducer from './router';

export const history = createBrowserHistory();

export default combineReducers({
  league,
  routing: createReducer(history),
  season,
});
