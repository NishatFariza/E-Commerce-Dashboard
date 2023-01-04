export class ProductApiRepo {
    //property => variable
    //method => function

    private productId = 1;

    constructor(productId: number) {
        this.productId = productId;
    }
    getProduct() { }
    getProductById(id: string){}
}

const product = new ProductApiRepo(5)

