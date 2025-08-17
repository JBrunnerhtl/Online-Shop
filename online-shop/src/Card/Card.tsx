import PropTypes from "prop-types"
import style from "./card.module.css"
function Card(props: {img: string, description: string, price: number})
{
    return(
        <>
            <div className={style.card}>
                <img src={props.img}/>
                <div>
                    <p className={style.descriptionText}>{props.description}</p>
                    <p className={`${style.descriptionText} ${style.priceText}`}>{props.price} €</p>
                </div>
            </div>
        </>
    )
}
Card.PropTypes = {
    img: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
}
Card.defaultProps = {
    img: "https://placehold.co/150x150",
    description: "No description available",
    price: -1
}
export default Card;