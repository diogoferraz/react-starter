import axios from 'axios';

function useApi(props) {
  const token = 'localhost';
  // const { logout } = useAuthService();

  const api = axios.create({
    baseURL: 'localhost:3000/address',
  });

  api.interceptors.request.use(async (config) => {
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  api.interceptors.response.use((response) => response, (error) => {
    if (error && error.response && error.response.status === 401) {
    //  logout();
      props.history.push('/login');
    }
    return Promise.reject(error);
  });

  return { api };
}

export default useApi;
