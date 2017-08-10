import { SeasonService } from '../../services';

/* ACTION TYPES
 =============================================================================================== */
const GET_SEASON = 'season/GET_SEASON';
const GET_SEASON_SUCCESS = 'season/GET_SEASON_SUCCESS';
const GET_SEASON_FAIL = 'season/GET_SEASON_FAIL';

const GET_SEASONS = 'season/GET_SEASONS';
const GET_SEASONS_SUCCESS = 'season/GET_SEASONS_SUCCESS';
const GET_SEASONS_FAIL = 'season/GET_SEASONS_FAIL';

const SAVE_SEASON = 'season/SAVE_SEASON';
const SAVE_SEASON_SUCCESS = 'season/SAVE_SEASON_SUCCESS';
const SAVE_SEASON_FAIL = 'season/SAVE_SEASON_FAIL';

const UPDATE_SEASON = 'season/UPDATE_SEASON';
const UPDATE_SEASON_SUCCESS = 'season/UPDATE_SEASON_SUCCESS';
const UPDATE_SEASON_FAIL = 'season/UPDATE_SEASON_FAIL';

const DELETE_SEASON = 'season/DELETE_SEASON';
const DELETE_SEASON_SUCCESS = 'season/DELETE_SEASON_SUCCESS';
const DELETE_SEASON_FAIL = 'season/DELETE_SEASON_FAIL';

/* REDUCER
 =============================================================================================== */
const initState = {
  list: [],
  isLoading: false,
  isLoaded: false,
  currentSeason: null,
};

export default function reducer(state = initState, action = {}) {
  const { type } = action;

  switch (type) {
    case GET_SEASON:
      return { ...state, currentSeason: null, isLoaded: false, isLoading: true };
    case GET_SEASON_SUCCESS:
      return { ...state, currentSeason: action.result, isLoaded: true, isLoading: false };
    case GET_SEASON_FAIL:
      return { ...state, currentSeason: null, isLoaded: false, isLoading: false };

    case GET_SEASONS:
      return { ...state, list: [], isLoaded: false, isLoading: true };
    case GET_SEASONS_SUCCESS:
      return { ...state, list: action.result, isLoaded: true, isLoading: false };
    case GET_SEASONS_FAIL:
      return { ...state, list: [], isLoaded: false, isLoading: false };

    case SAVE_SEASON:
    case UPDATE_SEASON:
    case DELETE_SEASON:
      return { ...state, isLoaded: false, isLoading: true };
    case SAVE_SEASON_SUCCESS:
    case UPDATE_SEASON_SUCCESS:
    case DELETE_SEASON_SUCCESS:
      return { ...state, isLoaded: true, isLoading: false };
    case SAVE_SEASON_FAIL:
    case UPDATE_SEASON_FAIL:
    case DELETE_SEASON_FAIL:
      return { ...state, isLoaded: false, isLoading: false };

    default:
      return { ...state };
  }
};

/* ACTIONS
 =============================================================================================== */

export const getSeason = (id) => ({
  types: [GET_SEASON, GET_SEASON_SUCCESS, GET_SEASON_FAIL],
  promise: () => SeasonService.getSeason(id),
});

export const getSeasons = () => ({
  types: [GET_SEASONS, GET_SEASONS_SUCCESS, GET_SEASONS_FAIL],
  promise: () => SeasonService.getSeasons(),
});

export const saveSeason = (newSeason) => ({
  types: [SAVE_SEASON, SAVE_SEASON_SUCCESS, SAVE_SEASON_FAIL],
  promise: () => SeasonService.saveSeason(newSeason),
});

export const updateSeason = (id, season) => ({
  types: [UPDATE_SEASON, UPDATE_SEASON_SUCCESS, UPDATE_SEASON_FAIL],
  promise: () => SeasonService.updateSeason(id, season),
});

export const deleteSeason = (id) => ({
  types: [DELETE_SEASON, DELETE_SEASON_SUCCESS, DELETE_SEASON_FAIL],
  promise: () => SeasonService.deleteSeason(id),
});
