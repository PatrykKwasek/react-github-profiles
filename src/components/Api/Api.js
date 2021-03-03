import axios from 'axios';

const baseURL = 'https://api.github.com/users/';

export const getData = (path) => {
  return axios.get(`${baseURL}${path}`);
}