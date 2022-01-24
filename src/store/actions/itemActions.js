import { landingService } from '../../services/landingService';

export function loadLanding() {
  return async (dispatch, getState) => {
    const { filterBy } = getState().landingModule;
    try {
      const landings = await landingService.getLanding(filterBy);
      dispatch({ type: 'SET_ITEMS', landings });
    } catch (err) {
      console.log('error action', err);
    }
  };
}

export function setFilterBy(filterBy) {
  return async (dispatch) => {
    dispatch({ type: 'SET_FILTER_BY', filterBy });
  };
}

export function getLandingById(itemId) {
  return async () => {
    return await landingService.getById(itemId);
  };
}
