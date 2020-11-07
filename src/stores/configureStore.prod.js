import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import monitorReducerEnhancer from '../enhancers/monitorReducer';
import rootReducer from '../reducers/rootReducer';
import { watchAuthSaga } from '../sagas';

const configureStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composeEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composeEnhancers);
  sagaMiddleware.run(watchAuthSaga);

  return store;
};

export default configureStore;
