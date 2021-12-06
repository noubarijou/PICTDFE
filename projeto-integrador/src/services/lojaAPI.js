import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://ec2-54-157-41-166.compute-1.amazonaws.com:8080'
});
export default api;