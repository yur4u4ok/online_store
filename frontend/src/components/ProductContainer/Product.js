import { useEffect, useState } from "react";
import { cartService } from "../../services/cartService";

const Product = ({product}) => {
    const {id, name, description, price} = product;

    const [addedItemId, setAddedItemId] = useState(null)
    const [cart, setCart] = useState([])

    useEffect(() => {
        const cart_items = cartService.getItems()
        if(cart_items){
            setCart(cart_items)
            cart.map(item => item.id === id ? setAddedItemId(true) : null)
        }
    }, [cart, id]);

    const addItemToTheCart = () => {
        cartService.setItem(product)
        setAddedItemId(true)
    }

    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>description: {description}</div>
            <div>price: {price}</div>
            <div>
                <button 
                    onClick={() => addItemToTheCart()}
                    disabled={addedItemId}
                >
                    Add to the cart
                </button>
            </div>
            
        </div>
    );
};

export {Product};