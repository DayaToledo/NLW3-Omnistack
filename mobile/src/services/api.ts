import axios from 'axios';
import { REACT_APP_IP_LOCAL } from '@env';

console.log(REACT_APP_IP_LOCAL);

const api = axios.create({
  baseURL: `http://${REACT_APP_IP_LOCAL}:3333`,
});

export default api;
