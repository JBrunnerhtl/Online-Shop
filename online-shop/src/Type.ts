export type NavbarItems = {
    id: number;
    name: string,
    url: string,
}
export type JsonType = {
    id: number;
    img: string;
    description: string;
    price: number;
    productId: number;
}
export type BasketItem = {
    item: JsonType,
    quantity: number
}
