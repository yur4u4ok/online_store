import css from './Order.module.css'


const Order = ({order: {id, created_at, total_price}}) => {
    
    return (
        <div className={css.order}>
            <div>ID: {id}</div>
            <div>Created At: {created_at}</div>
            <div className={css.price}>Total Price: {total_price}</div>
        </div>

    )
}

export {Order}
