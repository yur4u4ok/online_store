
const cartService = {
    setItem(item){
        const cart = localStorage.getItem('cart')

        if(cart){
            const storedItems = JSON.parse(cart)
            storedItems.push(item)
            
            localStorage.setItem('cart', JSON.stringify(storedItems))
        } else {
            const newCart = []
            newCart.push(item)
            localStorage.setItem('cart', JSON.stringify(newCart))
        }
    },
    getItems(){
        const cart = JSON.parse(localStorage.getItem('cart'))

        return cart
    },
    deleteItem(delete_item){
        const cart = localStorage.getItem('cart')

        const storedItems = JSON.parse(cart)
        const index = storedItems.findIndex(item => item.id === delete_item.id);
        if (index !== -1) {
            storedItems.splice(index, 1);
        }

        localStorage.setItem('cart', JSON.stringify(storedItems))

    },
    clear(){
        localStorage.removeItem('cart')
    }
}

export {
    cartService
}