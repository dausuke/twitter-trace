import axios from 'axios';

const env = import.meta.env;

const api = axios.create({
  baseURL: env.VITE_API_ENDPOINT,
  timeout: 60000,
});

console.log(env.VITE_API_ENDPOINT);

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (!!token && !!config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    throw error;
  },
);

export default api;
