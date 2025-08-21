import PropTypes from "prop-types"
import style from "./card.module.css"
import Product from "./Product.ts"
function Card(props: {img: string, description: string, price: number})
{
    const product: Product = new Product(props.img, props.description, props.price);
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
    price: PropTypes.number
}
Card.defaultProps = {
    img: "https://placehold.co/150x150",
    description: "No description available",
    price: -1
}


async function AddToBasket(product: Product)
{
    let lenght: number = 1;
    const response = await fetch("http://localhost:3000/basket");
    if(response.ok)
    {
        const data = await response.json();
        lenght += data.length;
    }
    else
    {
        console.error("Failed to fetch basket data");
    }

    await fetch("http://localhost:3000/basket" ,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: lenght,
            image: product.getImage(),
            description: product.getDescription(),
            price: product.getPrice()
        })
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
}

export default Card;