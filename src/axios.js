import axios from 'axios';

const {REACT_APP_API_BASE_URL} = process.env;

const instance = axios.create({
    baseURL: REACT_APP_API_BASE_URL
})

export default instance