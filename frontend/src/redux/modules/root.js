import { combineReducers } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory';
import season from './season';

import createReducer from './router';

export const history = createBrowserHistory();

export default combineReducers({
  season,
  routing: createReducer(history),
});
