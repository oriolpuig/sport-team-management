/* ACTION TYPES
 =============================================================================================== */
const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

/* REDUCER
 =============================================================================================== */
const createReducer = (history) => {
  const initState = {
    location: history.location,
    action: history.action,
  };

  return function reducer(state = initState, action = {}) {
    const { type } = action;

    switch (type) {
      case LOCATION_CHANGE:
        return { ...state, location: action.payload };

      default:
        return { ...state };
    }
  };
};

export default createReducer;
