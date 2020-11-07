import userConstant from '../constants/userConstants';
import { updateObject } from '../helpers/reducerUtility';

const initialState = {
  user: {},
  authenticated: true,
  fetching: false,
  success: false,
  failure: false,
};

const loginRequest = (state) => updateObject(state, { fetching: true, success: false, failure: false });

const loginSuccess = (state, action) => updateObject(state, {
  user: action.payload.user, authenticated: true, fetching: false, success: true, failure: false,
});

const loginFailure = (state) => updateObject(state, {
  authenticated: false, fetching: false, success: false, failure: true,
});

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstant.LOGIN_REQUEST:
      return loginRequest(state);
    case userConstant.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case userConstant.LOGIN_FAILURE:
      return loginFailure(state);
    default:
      return state;
  }
}
