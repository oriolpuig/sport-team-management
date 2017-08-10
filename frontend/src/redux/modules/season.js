import { SeasonService } from '../../services';

/* ACTION TYPES
 =============================================================================================== */
const GET_SEASONS = 'season/GET_SEASONS';
const GET_SEASONS_SUCCESS = 'season/GET_SEASONS_SUCCESS';
const GET_SEASONS_FAIL = 'season/GET_SEASONS_FAIL';

const SAVE_SEASON = 'season/SAVE_SEASON';
const SAVE_SEASON_SUCCESS = 'season/SAVE_SEASON_SUCCESS';
const SAVE_SEASON_FAIL = 'season/SAVE_SEASON_FAIL';

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
    case GET_SEASONS:
      return { ...state, list: [], isLoaded: false, isLoading: true };
    case GET_SEASONS_SUCCESS:
      return { ...state, list: action.result, isLoaded: true, isLoading: false };
    case GET_SEASONS_FAIL:
      return { ...state, list: [], isLoaded: false, isLoading: false };

    case SAVE_SEASON:
      return { ...state, isLoaded: false, isLoading: true };
    case SAVE_SEASON_SUCCESS:
      return { ...state, isLoaded: true, isLoading: false };
    case SAVE_SEASON_FAIL:
      return { ...state, isLoaded: false, isLoading: false };


    default:
      return { ...state };
  }
};

/* ACTIONS
 =============================================================================================== */

export const getSeasons = () => ({
  types: [GET_SEASONS, GET_SEASONS_SUCCESS, GET_SEASONS_FAIL],
  promise: () => SeasonService.getSeasons(),
});

export const saveSeason = (newSeason) => ({
  types: [SAVE_SEASON, SAVE_SEASON_SUCCESS, SAVE_SEASON_FAIL],
  promise: () => SeasonService.saveSeason(newSeason),
});
