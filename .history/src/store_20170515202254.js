import { createStore, applyMiddleware, compose} from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const middleWares = [
  createLogger();
];

export default createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(...middleWares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);