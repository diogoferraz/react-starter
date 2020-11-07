import { put, call, all } from 'redux-saga/effects';
import userActions from '../actions/userActions';
import useApi from '../hooks/useApi';
import useLocalstore from '../hooks/useLocalstore';

export function* login(action) {
  try {
    const { username, password } = action.payload;
    const { api } = useApi();
    yield put(userActions.loginFetch());
    const logged = yield api.post('/auth/login', { username, password });
    yield all([
      put(userActions.loginSuccess({ user: logged.data.user })),
      call(useLocalstore.setAuthToken, logged.data.token),
    ]);
  } catch (error) {
    yield put(userActions.loginFailure());
    throw new Error(error);
  }
}

export function* logout() {
  try {
    yield call(useLocalstore.removeAuthToken);
  } catch (error) {
    throw new Error(error);
  }
}
