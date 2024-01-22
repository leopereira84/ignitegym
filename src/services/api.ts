import axios from "axios";

const api = axios.create({
  baseURL: 'http://10.1.11.102:3333'
});

api.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

export { api };
