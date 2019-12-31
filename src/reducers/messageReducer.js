import messageConstants from '../constants/messageConstants';
import { updateObject } from '../helpers/reducerUtility';

const initialState = {
  message: '',
};

const setSuccess = (state, action) => updateObject(state, { message: action.message });
const setError = (state, action) => updateObject(state, { message: action.message });
const setClear = (state, action) => updateObject(state, { message: action.message });

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case messageConstants.SUCCESS:
      return setSuccess(state, action);
    case messageConstants.ERROR:
      return setError(state, action);
    case messageConstants.CLEAR:
      return setClear(state, action);
    default:
      return state;
  }
}
