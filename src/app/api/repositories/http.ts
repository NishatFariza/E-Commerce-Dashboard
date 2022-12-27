import axios from "axios";


const http = axios.create({
    baseURL: "http://104.251.211.125:8055",
    headers: {
        "content-type": "application/json"
    }
})


export default http;