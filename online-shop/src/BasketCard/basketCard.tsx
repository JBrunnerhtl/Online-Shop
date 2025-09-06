import PropTypes from "prop-types";
import style from "./basketCard.module.css"
import type {JsonType} from "../Type.ts";
import {useEffect, useState} from "react";
const path = "http://localhost:3000/basket";
function BasketCard(props: {item: JsonType, quantity: number, onDelete: () => void})
{
    const [count, setCount] = useState<number>(props.quantity);
    useEffect(() => {
        if(count === 0)
        {
            props.onDelete();
        }
    }, [count, props]);
    return(
        count > 0 ?
        <div>
        <div className= {style.outerDiv}>
            <div className={style.imageDiv}>
            <img src={props.item.img} alt = "product picture"/>
            </div>
            <div className={style.informationDiv}>
                <p>{props.item.description}</p>
                <p>{props.item.price} €</p>
            </div>
            <div className={style.informationDiv}>
                <button className={style.buttonStyleMinus} onClick={()=>{deleteItemFromBasket(props.item.productId).then(); setCount(c => c -1); console.log(count)}}>-</button>
                <span>{count}</span>
                <button className={style.buttonStylePlus} onClick={()=> {addItemToBasket(props.item).then(); setCount(c => c +1)}}>+</button>
            </div>
        </div>
        </div>
        : <div></div>
    )
}

async function deleteItemFromBasket(id: number){
    const response = await fetch(path)
    const data: JsonType[] = await response.json();
    data.reverse()
    for (const item of data) {
        if (item.productId === id) {
            await fetch(path + "/" + item.id, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });
            break;
        }
    }



}
async function addItemToBasket(product: JsonType)
{
    fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            productId: product.productId,
            img: product.img,
            description: product.description,
            price: product.price
        })
    }).then((res) => res.json())
}
BasketCard.PropTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        productId: PropTypes.number
    })),
    quantity: PropTypes.number,
    onDelete: PropTypes.func,
}
BasketCard.defaultProps = {
    item: [{
        id: -1,
        img: "https://placehold.co/150x150",
        description: "No description available",
        price: -1,
        productId: -1
    }],
    quantity: -1,
    onDelete: () => {}
}
export default BasketCard;