import axios from 'axios';

/**
 * Create an Axios api with defaults
 */
const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;