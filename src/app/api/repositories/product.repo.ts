import { AxiosInstance, AxiosResponse } from "axios";
import { Product } from "../models/Product.model";
import http from "./http";

export class ProductApiRepo {
     private http: AxiosInstance;

     constructor( http: AxiosInstance) { 
        this.http = http
    }
    getProducts(params: CommonPaginationQuery): Promise<AxiosResponse<{data: Product[]}>> { 
        return this.http.get("/items/products", {params: params})
    }

    getProductById(id: string){}
}

export default new ProductApiRepo(http)

interface CommonPaginationQuery {
    limit: number,
    page: number,
}