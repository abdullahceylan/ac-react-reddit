import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const isDev = process.env.NODE_ENV !== 'production';
const middlewares = [thunkMiddleware];

if (isDev) {
  const { createLogger } = require('redux-logger');
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

const devToolsCompose = typeof window != 'undefined' && isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  devToolsCompose(
    applyMiddleware(
      ...middlewares
    ),
  ),
);

export default store;
