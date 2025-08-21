import Product from "../Card/Product.ts";
import type {JsonType} from "../Type.ts"
import Card from "../Card/Card.tsx";
import {type ReactElement} from "react";
import {useState, useEffect} from "react";

function Products() {

    const [data, setData] = useState<ReactElement[]>([]);
    useEffect(() => {
        async function fetchData() {
            let products: Product[] = [];

            try {
                products = await GetData();
                setData(() => products.map((product: Product) => <Card img={product.image} price={product.price} description={product.description}/>));
            }
            catch (err)
            {
                console.error(err);
                console.log("Check connection to the server");
            }
        }
        fetchData();
    }, []);
    return (<>{data}</>);
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