import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  messageReducer,
  userReducer,
});

export default rootReducer;
