import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const isDev = process.env.NODE_ENV !== 'production';

const loggerMiddleware = createLogger();
const devToolsCompose = typeof window != 'undefined' && isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunkMiddleware];

if (isDev) {
  middlewares.push(loggerMiddleware);
}

const store = createStore(
  rootReducer,
  devToolsCompose(
    applyMiddleware(
      ...middlewares
    ),
  ),
);

export default store;
