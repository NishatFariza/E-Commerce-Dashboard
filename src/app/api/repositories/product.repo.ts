import { AxiosInstance } from "axios";
import http from "./http";

export class ProductApiRepo {
     private http: AxiosInstance;

     constructor( http: AxiosInstance) { 
        this.http = http
    }
    getProducts(params: CommonPaginationQuery): Promise<any> { 
        return this.http.get("/items/products", {params: params})
    }

    getProductById(id: string){}
}

const productApiRepo = new ProductApiRepo(http)

interface CommonPaginationQuery {
    limit: number,
    page: number,
}