const INITIAL_STATE = {
  landings: null,
  filterBy: null,
};

export function landingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        ...state,
        landings: [...action.landings],
      };
    case 'SET_FILTER_BY':
      return {
        ...state,
        filterBy: { ...action.filterBy },
      };

    default:
      return state;
  }
}
