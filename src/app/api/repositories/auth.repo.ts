import {AxiosInstance, AxiosResponse} from "axios"
import http from "./http";
import {AuthenticatorUser} from    "../models/user.model"

class AuthApiRepo{

    private http: AxiosInstance;

    constructor( http: AxiosInstance) { 
        this.http = http
    }
    
    login = (payLoad: LoginPayload) => {
        return this.http.post("/auth/login", payLoad)
    }

    me = (): Promise<AxiosResponse<{data: AuthenticatorUser}>> => {
        return this.http.get("/users/me")
    }

}

export interface LoginPayload {
    email: string,
    password: string,
}


export default new AuthApiRepo(http);