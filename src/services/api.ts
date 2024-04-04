import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3334',
    timeout: 10000,
});

export default api;