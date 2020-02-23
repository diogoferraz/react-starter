import userConstant from '../constants/userConstants';

const loginInit = (payload) => ({ type: userConstant.LOGIN_INIT, payload });
const loginFetch = () => ({ type: userConstant.LOGIN_REQUEST });
const loginSuccess = (payload) => ({ type: userConstant.LOGIN_SUCCESS, payload });
const loginFailure = () => ({ type: userConstant.LOGIN_FAILURE });

const userActions = {
  loginInit,
  loginFetch,
  loginSuccess,
  loginFailure,
};

export default userActions;
