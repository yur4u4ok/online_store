import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const authService = {
    async login(user) {
        try{
            const response = await apiService.post(urls.auth.login, user);
            const access_token = response?.data?.access
            localStorage.setItem('access', access_token)
            return {'message': 'user is successfully logged in', 'status': response?.status}
        }catch (e) {
            if (e?.response?.status === 401) {
                return {'message': 'user is not registered', 'status': e?.response?.status}
            }
        }
    },
    async register(userData) {
        try{
            const response = await apiService.post(urls.auth.register, userData);
            if (response?.status === 201) {
                return {'message': 'user is registered successfully', 'status': response?.status}
            }
        }catch (e) {
            if (e?.response?.status === 400) {
                return {'message': 'user is already registered', 'status': e?.response?.status}
            }
        }
    }
}

export {
    authService
}