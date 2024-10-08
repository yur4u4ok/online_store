import { useEffect, useState } from "react"
import { cartService } from "../services/cartService";
import { Cart } from "../components/CartContainer/Cart";
import { orderService } from "../services/orderService";

import css from './CartPage.module.css'


const CartPage = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [data, setData] = useState(null)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        const items = cartService.getItems()
        setCart(items)
    }, [flag, data]);

    useEffect(() => {
        setFlag(false)

        let sum = 0
        cart && cart.map(item => sum += item.price)
        setTotalPrice(sum)
    }, [cart]);

    useEffect(() => {
        
    }, [data]);

    const makeOrder = () => {
        const product_ids = []
        cart && cart.map(item => product_ids.push(item.id))

        orderService.makeOrder({'product_ids': product_ids}).then(({data}) => setData(data))
        cartService.clear()
    }
    
    return (
        <div>
            {data && 
            <div className={css.successfulOrder}>
                The order was placed for a total amount of {data['total_price']}
            </div>}
            
            {cart && cart.length > 0 ? (
                <>  
                    <button onClick={() => makeOrder()}>Make an Order</button>
                    <div>Total Price: {totalPrice}</div>
                    {cart.map(product => <Cart key={product.id} product={product} setFlag={setFlag}/>)}
                </>
            ) : (
                <div>There are no added products in the cart :+</div>
            )}
        </div>

    )
}

export {CartPage}
