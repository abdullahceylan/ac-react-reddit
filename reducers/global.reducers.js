import { globalConstants } from '../constants';

const initialState = {
  pageParams: {},
  router: {
    currentPath: '/',
    prevPath: '/',
  },
};

const globalReducers = (state = initialState, action) => {
  switch (action.type) {
    case globalConstants.SET_PAGEPARAMS_REQUEST:
      return {
        ...state,
        pageParams: action.params,
      }
    case globalConstants.SET_ROUTER_PATH:
      return {
        ...state,
        router: {
          ...state.router,
          ...action.params,
        },
      }
    default:
      return state;
  }
};

export default globalReducers;
