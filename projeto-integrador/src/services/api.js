import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://ec2-54-157-41-166.compute-1.amazonaws.com:8080'
  baseURL: 'https://poisongames.herokuapp.com'
});

export default api;