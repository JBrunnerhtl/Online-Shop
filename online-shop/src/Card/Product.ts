export class Product
{
    constructor(img: string, description: string, price: number, productId: number) {
        this.image = img;
        this.description = description;
        this.price = price;
        this.productId = productId;
    }
    image: string;
    description: string;
    price: number;
    productId: number;
    getImage(): string {
        return this.image;
    }
    getDescription(): string {
        return this.description;
    }
    getPrice(): number {
        return this.price;
    }
    getProductId(): number {
        return this.productId;
    }
}
export default Product;