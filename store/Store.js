import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();
const devToolsCompose = typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  devToolsCompose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  ),
);

export default store;
