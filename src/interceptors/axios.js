import axios from "axios";
import {getToken} from "../utils/token";

const api = axios.create({
    baseURL: 'http://localhost:8080/api/'
})

api.interceptors.request.use(
    (config) => {
        const token = getToken();
        config.headers['Authorization'] = `Bearer ${token}`;

        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const data = error?.response?.data;
        if (data.code === 'X06') {
            console.log(data.message)
        }
        return Promise.reject(error)
    }
)

export default api
