export class Product
{
    constructor(img: string, description: string, price: number) {
        this.image = img;
        this.description = description;
        this.price = price;
    }
    image: string;
    description: string;
    price: number;

    getImage(): string {
        return this.image;
    }
    getDescription(): string {
        return this.description;
    }
    getPrice(): number {
        return this.price;
    }
    setImage(image: string): void {
        this.image = image;
    }
    setDescription(description: string): void {
        this.description = description;
    }
    setPrice(price: number): void {
        this.price = price;
    }
}
export default Product;