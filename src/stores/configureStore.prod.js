import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import monitorReducerEnhancer from '../enhancers/monitorReducer';
import rootReducer from '../reducers/rootReducer';
// import { watchSagas } from '../sagas';


const configureStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [thunkMiddleware, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composeEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composeEnhancers);
  // sagaMiddleware.run(watchSagas);


  return store;
};

export default configureStore;
