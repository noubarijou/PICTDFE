import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://'
});
export default api;