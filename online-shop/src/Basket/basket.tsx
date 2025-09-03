import type {BasketItem, JsonType} from "../Type.ts";
import {type ReactElement, useEffect, useState} from "react";
import BasketCard from "../BasketCard/basketCard.tsx"


function Basket()
{
    const [basketItems, setBasketItems] = useState<ReactElement[]>([]);
    useEffect(() => {
        async function fetchBasketItems() {
            const foundItems: BasketItem[] = [];
            try {
                const response = await fetch("http://localhost:3000/basket");
                if (response.ok) {
                    const data: JsonType[] = await response.json();
                    data.forEach((item) => {
                        let count: number = 0;
                        data.forEach((innerItem) => {
                            if (item.productId === innerItem.productId) {
                                count++;
                            }
                        });
                        const isIn: boolean = foundItems.every(itemSearch => itemSearch.item.productId !== item.productId) // Checks with the productId if the product is already in the array


                        if(isIn || foundItems.length === 0) {
                            foundItems.push({item: item, quantity: count});
                        }
                    });
                }


            }
            catch (err)
            {
                console.error(err);
            }
            setBasketItems(createCards(foundItems));
        }
        fetchBasketItems();
    }, []);

    return(

        <div style={{"display": "flex-box", "margin": "10px"}}>
            {basketItems}
        </div>
    )
}
function createCards(input: BasketItem[])
{
    return input.map(item => <BasketCard key={item.item.id} item={item.item} quantity={item.quantity}/>);
}




export default Basket;