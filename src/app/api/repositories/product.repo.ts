import { AxiosInstance } from "axios";

export class ProductApiRepo {
     private http: AxiosInstance;

     constructor( http: AxiosInstance) { 
        this.http = http
    }
    getProduct() { 
        return this.http.get("/items/products")
    }


    getProductById(id: string){}
}

const product = new ProductApiRepo(5)

