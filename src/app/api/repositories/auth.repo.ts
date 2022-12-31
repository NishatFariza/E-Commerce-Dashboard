import {AxiosInstance} from "axios"
import http from "./http";

class AuthApiRepo{

    private http: AxiosInstance;

    constructor( http: AxiosInstance) { 
        this.http = http
    }
    
    login = (payLoad: LoginPayload) => {
        return this.http.post("/auth/login", payLoad)
    }

}

export interface LoginPayload {
    email: string,
    password: string,
}


export default new AuthApiRepo(http);