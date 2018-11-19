import { globalConstants } from '../constants';

export const setPageParams = (params = {}) => {
  const request = params => ({ type: globalConstants.SET_PAGEPARAMS_REQUEST, params });

  return (dispatch) => {
    console.log('setPageParams.params', params);
    dispatch(request(params));
  };
}

export const setRouterPath = (params) => {
  const request = params => ({ type: globalConstants.SET_ROUTER_PATH, params });

  return (dispatch) => {
    console.log('setRouterPath.params', params);
    dispatch(request(params));
  };
}
