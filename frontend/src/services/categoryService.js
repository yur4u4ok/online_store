import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const categoryService = {
    getAll() {
        return apiService.get(urls.categories)
    },
    getProductsByCategory(id) {
        return apiService.get(`${urls.categories}/${id}/products`)
    },
}

export {
    categoryService
}