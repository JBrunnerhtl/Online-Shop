import type {BasketItem, JsonType} from "../Type.ts";
import {type ReactElement, useEffect, useState} from "react";
import BasketCard from "../BasketCard/basketCard.tsx"
import style from "./basket.module.css"

function Basket()
{
    const [basketItems, setBasketItems] = useState<ReactElement[]>([]);
    const [isValid, setIsValid] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [sum, setSum] = useState<number>(0);
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
        let total: number = 0;
        foundItems.forEach(item => {
            total += item.item.price * item.quantity;
        });
        setSum(total);
        console.log("1")
        setBasketItems(createCards(foundItems));

        if (foundItems.length <= 0)
        {
            setIsValid(false);
        }
        else
        {
            setIsValid(true);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        fetchBasketItems();
        console.log("done")
    }, []);
    function createCards(input: BasketItem[])
    {
        return input.map(item => <BasketCard key={item.item.id} item={item.item} quantity={item.quantity} onDelete={fetchBasketItems}/>);
    }
    return(
        isLoading ?
            <h1 className={style.h1Style}>Loading...</h1> :
        isValid ?
        <div className={style.divStyle}>
            {basketItems}
            <p className={style.sumTextStyle}>Sum: {sum}€</p>
        </div> : <h1 className={style.h1Style}>You don't have anything in your basket yet!</h1>
    )
}





export default Basket;