const baseURL = '/api'

const auth = '/auth'
const register = '/register'
const products = '/products'
const categories = '/categories'
const orders = '/orders'

const urls = {
    auth: {
        login: auth,
        register: `${auth}${register}`
    },
    products,
    categories,
    orders
}

export {
    baseURL,
    urls
}