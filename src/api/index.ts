import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);
