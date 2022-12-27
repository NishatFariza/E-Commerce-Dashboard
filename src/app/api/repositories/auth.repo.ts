import {AxiosInstance} from "axios"
import http from "./http";

class AuthApiRepo{

    private http: AxiosInstance;

    constructor( http: AxiosInstance) { 
        this.http = http
    }
    
    login = (email: string, password: string) => {
        return this.http.post("/auth/login", {email, password })
    }

}


export default new AuthApiRepo(http);