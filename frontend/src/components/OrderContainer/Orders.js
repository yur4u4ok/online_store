import { useState, useEffect } from "react"
import { Order } from "./Order";
import { orderService } from "../../services/orderService";

import css from './Orders.module.css'


const Orders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        orderService.getOrders().then(({data}) => setOrders(data))
    }, []);

    return (
        <div>
            {orders.length < 1 && 
                <div className={css.messageOrder}>
                    You have not placed any orders yet
                </div>
            }
            {orders.map(order => <Order order={order}/>)}
        </div>

    )
}

export {Orders}
