import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger'
import reducer from './reducers/comments'
const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(promise, logger)
);
export default store;