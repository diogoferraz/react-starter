import axios from 'axios';
import useLocalstore from './useLocalstore';

function useApi() {
  const token = useLocalstore.getAuthToken() ? useLocalstore.getAuthToken() : undefined;
  const api = axios.create({
    baseURL: 'https://api-backend-nodejs.herokuapp.com/api/v1',
  });

  api.interceptors.request.use(async (config) => {
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  return { api };
}

export default useApi;
