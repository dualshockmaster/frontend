import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackds-backend.herokuapp.com',
});

export default api;