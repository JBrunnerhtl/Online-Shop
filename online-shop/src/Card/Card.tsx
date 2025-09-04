import PropTypes from "prop-types"
import style from "./card.module.css"
import Product from "./Product.ts"
function Card(props: {img: string, description: string, price: number, productId: number})
{
    const product: Product = new Product(props.img, props.description, props.price, props.productId);

    return(
        <>
            <div className={style.card}>
                <img src={props.img}/>
                <div>
                    <p className={style.descriptionText}>{props.description}</p>
                    <p className={`${style.descriptionText} ${style.priceText}`}>{props.price} €</p>
                    <button className={`${style.buttonCard}`} onClick={()=>AddToBasket(product)}>Add to basket</button>
                </div>
            </div>
        </>
    )
}
Card.PropTypes = {
    img: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    productId: PropTypes.number
}
Card.defaultProps = {
    img: "https://placehold.co/150x150",
    description: "No description available",
    price: -1
}


async function AddToBasket(product: Product)
{
    await fetch("http://localhost:3000/basket" ,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            img: product.getImage(),
            description: product.getDescription(),
            price: product.getPrice(),
            productId: product.getProductId()
        })
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
}

export default Card;