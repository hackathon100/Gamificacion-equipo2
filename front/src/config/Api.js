import axios from 'axios';
import { setToken, getAccessToken, getRefreshToken } from 'util/localStorage';

const baseURL = window.location.origin;
const headers = { 'Content-Type': 'application/json' };

const http = axios.create({ baseURL, headers });
http.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    const refresh = getRefreshToken();
    if (
      refresh &&
      error.response &&
      error.response.request.responseURL !== `${baseURL}api/token/refresh` &&
      (error.response.status === 401 || error.response.status === 403) &&
      error.response.data.code === 'token_not_valid' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      http.defaults.headers.common.Authorization = undefined;
      return http.post('/api/token/refresh', { refresh }).then((res) => {
        if (res.status === 201 || res.status === 200) {
          setToken({ token: res.data.access, refresh });
          http.defaults.headers.common.Authorization = `Bearer ${getAccessToken()}`;
          http.defaults.headers.common['access-token'] = `Bearer ${getAccessToken()}`;
          originalRequest.headers.Authorization = `Bearer ${getAccessToken()}`;
          return http(originalRequest);
        }
        return Promise.reject(error);
      });
    }
    return Promise.reject(error);
  }
);

export default http;
