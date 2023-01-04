import axios from "axios";
import { config } from "process";


const http = axios.create({
    baseURL: "http://104.251.211.125:8055",
    headers: {
        "content-type": "application/json"
    }
})


http.interceptors.request.use((config) => {

 const token = localStorage.getItem("Token")
    let authHeader = {}
    if (token) {
        authHeader = {Authorization: `Barer ${token}`}
    }
    return {
        ...config,
        headers: {
            ...config.headers,
            Authorization: token ? `Bearer ${token}` : "",
       }
    };
}, (error) => {
    return Promise.reject(error);
});

export default http;