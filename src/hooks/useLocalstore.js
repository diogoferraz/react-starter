const getAuthStatus = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return !!token.access_token;
};

const getAuthToken = () => JSON.parse(localStorage.getItem('token'));

const setAuthToken = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
};

const removeAuthToken = (localStoreItem) => {
  localStorage.removeItem(localStoreItem);
};

export default {
  getAuthToken,
  getAuthStatus,
  setAuthToken,
  removeAuthToken,
};
