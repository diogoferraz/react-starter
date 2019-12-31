import messageConstant from '../constants/messageConstants';

const success = (message) => ({ type: messageConstant.SUCCESS, message });
const error = (message) => ({ type: messageConstant.ERROR, message });
const clear = (message) => ({ type: messageConstant.CLEAR, message });

const messageActions = {
  success,
  error,
  clear,
};

export default messageActions;
