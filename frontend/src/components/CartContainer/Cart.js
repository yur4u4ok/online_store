import { cartService } from "../../services/cartService";


const Cart = ({product, setFlag}) => {
    const {id, name, description, price} = product;

    const deleteItemFromTheCart = () => {
        cartService.deleteItem(product)
        setFlag(true)
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
                    onClick={() => deleteItemFromTheCart()}
                >
                    Delete from the cart
                </button>
            </div>
            
        </div>
    );
};

export {Cart};