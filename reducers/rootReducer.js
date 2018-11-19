import { combineReducers } from 'redux';
import contentReducers from './content.reducers';
import globalReducers from './global.reducers';

const initialState = {};

const rootReducer = combineReducers({
  ...initialState,
  ...contentReducers,
  global: globalReducers,
});

export default rootReducer;
