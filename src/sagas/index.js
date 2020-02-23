import {
  all, takeLatest, takeEvery,
} from 'redux-saga/effects';
import userConstants from '../constants/userConstants';
import { login, logout } from './authSagas';

export function* watchAuthSaga() {
  yield all([
    takeEvery(userConstants.LOGIN_INIT, login),
    takeEvery(userConstants.LOGOUT, logout),
  ]);
}

export function* watchUserSaga() {
  yield all([
    takeLatest(userConstants.GETALL_REQUEST),
    takeEvery(userConstants.REGISTER_REQUEST),
  ]);
}
