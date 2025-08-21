import Product from "../Card/Product.ts";
import type {JsonType} from "../Type.ts"
import Card from "../Card/Card.tsx";
import type {ReactElement} from "react";
import {useState} from "react";

function Products() {
    let products: Promise<Product[]>;

    try
    {
        products = GetData();

    }catch (err)
    {
        console.log("Error while fetching products: ");
        console.log(err);
    }

    const [cards, setCards] = useState<ReactElement[]>([]);
    products.then((data) => {
        let basket: ReactElement[] = []
        data.forEach((item) => {
            basket.push(<Card img={item.image} description={item.description} price={item.price} />)

        })
        setCards(basket);
    })

    return (<>{cards}</>);
}

async function GetData()
{
    const response = await fetch("http://localhost:3000/products");
    if(response.ok)
    {
        const data: JsonType[] = await response.json();
        return data.map(a => {
            return new Product(a.img, a.description, a.price);
        });
    }
    throw new Error("Can't fetch data");

}
export default Products;