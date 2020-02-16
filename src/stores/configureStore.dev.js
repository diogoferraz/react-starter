import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducerEnhancer from '../enhancers/monitorReducer';
import loggerMiddleware from '../middlewares/logger';
import rootReducer from '../reducers/rootReducer';
// import { watchSagas } from '../sagas';

const configureStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [loggerMiddleware, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];

  const composeEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composeEnhancers);
  // sagaMiddleware.run(watchSagas);

  return store;
};

export default configureStore;
