import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const productService = {
    getAll() {
        return apiService.get(urls.products)
    },
    getByParams(query){
        return apiService.get(`${urls.products}?${query}`)
    }
}

export {
    productService
}