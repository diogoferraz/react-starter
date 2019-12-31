import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middlewares/logger';
import rootReducer from './reducers/rootReducer';

const configureStore = (preloadedState) => {
  let composeEnhancers;
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
    composeEnhancers = composeWithDevTools(...enhancers);
  } else {
    composeEnhancers = compose(...enhancers);
  }

  const store = createStore(rootReducer, preloadedState, composeEnhancers);

  return store;
};

export default configureStore;
