import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const orderService = {
    getOrders() {
        return apiService.get(urls.orders)
    },
    makeOrder(data){
        return apiService.post(urls.orders, data)
    }
}

export {
    orderService
}