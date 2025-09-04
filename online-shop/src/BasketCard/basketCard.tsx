import PropTypes from "prop-types";
import style from "./basketCard.module.css"
import type {JsonType} from "../Type.ts";

function BasketCard(props: {item: JsonType, quantity: number})
{
    console.log(props.item)
    return(
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
                <button>-</button>
                <span>{props.quantity}</span>
                <button>+</button>
            </div>
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