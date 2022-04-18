import axios from 'axios';

const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_IP_LOCAL}:3333`,
});

export default api;