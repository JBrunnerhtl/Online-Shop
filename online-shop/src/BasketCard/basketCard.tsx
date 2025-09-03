import PropTypes from "prop-types";
import style from "./basketCard.module.css"
import type {JsonType} from "../Type.ts";

function BasketCard(props: {item: JsonType, quantity: number})
{
    console.log(props.item)
    return(
        <div className= {style.outerDiv}>
            <img src={props.item.img} alt = "product picture"/>
            <div className={style.descriptionDiv}>
                <p>{props.item.description}</p>
                <p>{props.item.price} €</p>
            </div>
            <div className={style.quantityDiv}>
                <button>-</button>
                <span>{props.quantity}</span>
                <button>+</button>
            </div>
        </div>
    )
}
BasketCard.PropTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        productId: PropTypes.number
    })),
    quantity: PropTypes.number
}
BasketCard.defaultProps = {
    item: [{
        id: -1,
        img: "https://placehold.co/150x150",
        description: "No description available",
        price: -1,
        productId: -1
    }],
    quantity: -1
}
export default BasketCard;