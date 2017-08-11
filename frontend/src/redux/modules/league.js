import { LeagueService } from '../../services';

/* ACTION TYPES
 =============================================================================================== */
const GET_LEAGUE = 'league/GET_LEAGUE';
const GET_LEAGUE_SUCCESS = 'league/GET_LEAGUE_SUCCESS';
const GET_LEAGUE_FAIL = 'league/GET_LEAGUE_FAIL';

const GET_LEAGUES = 'league/GET_LEAGUES';
const GET_LEAGUES_SUCCESS = 'league/GET_LEAGUES_SUCCESS';
const GET_LEAGUES_FAIL = 'league/GET_LEAGUES_FAIL';

const SAVE_LEAGUE = 'league/SAVE_LEAGUE';
const SAVE_LEAGUE_SUCCESS = 'league/SAVE_LEAGUE_SUCCESS';
const SAVE_LEAGUE_FAIL = 'league/SAVE_LEAGUE_FAIL';

const UPDATE_LEAGUE = 'league/UPDATE_LEAGUE';
const UPDATE_LEAGUE_SUCCESS = 'league/UPDATE_LEAGUE_SUCCESS';
const UPDATE_LEAGUE_FAIL = 'league/UPDATE_LEAGUE_FAIL';

const DELETE_LEAGUE = 'league/DELETE_LEAGUE';
const DELETE_LEAGUE_SUCCESS = 'league/DELETE_LEAGUE_SUCCESS';
const DELETE_LEAGUE_FAIL = 'league/DELETE_LEAGUE_FAIL';

const SET_CURRENT_LEAGUE = 'league/SET_CURRENT_LEAGUE';

/* REDUCER
 =============================================================================================== */
const initState = {
  list: [],
  isLoading: false,
  isLoaded: false,
  currentLeague: null,
};

export default function reducer(state = initState, action = {}) {
  const { type } = action;

  switch (type) {
    case GET_LEAGUE:
      return { ...state, currentLeague: null, isLoaded: false, isLoading: true };
    case GET_LEAGUE_SUCCESS:
      return { ...state, currentLeague: action.result, isLoaded: true, isLoading: false };
    case GET_LEAGUE_FAIL:
      return { ...state, currentLeague: null, isLoaded: false, isLoading: false };

    case GET_LEAGUES:
      return { ...state, list: [], isLoaded: false, isLoading: true };
    case GET_LEAGUES_SUCCESS:
      return { ...state, list: action.result, isLoaded: true, isLoading: false };
    case GET_LEAGUES_FAIL:
      return { ...state, list: [], isLoaded: false, isLoading: false };

    case SAVE_LEAGUE:
    case UPDATE_LEAGUE:
    case DELETE_LEAGUE:
      return { ...state, currentLeague: null, isLoaded: false, isLoading: true };
    case SAVE_LEAGUE_SUCCESS:
    case UPDATE_LEAGUE_SUCCESS:
    case DELETE_LEAGUE_SUCCESS:
      return { ...state, currentLeague: null, isLoaded: true, isLoading: false };
    case SAVE_LEAGUE_FAIL:
    case UPDATE_LEAGUE_FAIL:
    case DELETE_LEAGUE_FAIL:
      return { ...state, currentLeague: null, isLoaded: false, isLoading: false };

    case SET_CURRENT_LEAGUE:
      return { ...state, currentLeague: action.currentLeague };

    default:
      return { ...state };
  }
};

/* ACTIONS
 =============================================================================================== */

export const getLeague = (id) => ({
  types: [GET_LEAGUE, GET_LEAGUE_SUCCESS, GET_LEAGUE_FAIL],
  promise: () => LeagueService.getById(id),
});

export const getLeagues = () => ({
  types: [GET_LEAGUES, GET_LEAGUES_SUCCESS, GET_LEAGUES_FAIL],
  promise: () => LeagueService.getAll(),
});

export const saveLeague = (newLeague) => ({
  types: [SAVE_LEAGUE, SAVE_LEAGUE_SUCCESS, SAVE_LEAGUE_FAIL],
  promise: () => LeagueService.save(newLeague),
});

export const updateLeague = (id, league) => ({
  types: [UPDATE_LEAGUE, UPDATE_LEAGUE_SUCCESS, UPDATE_LEAGUE_FAIL],
  promise: () => LeagueService.update(id, league),
});

export const deleteLeague = (id) => ({
  types: [DELETE_LEAGUE, DELETE_LEAGUE_SUCCESS, DELETE_LEAGUE_FAIL],
  promise: () => LeagueService.delete(id),
});

export const setCurrentLeague = (currentLeague) => ({
  type: SET_CURRENT_LEAGUE,
  currentLeague,
});
