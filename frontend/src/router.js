import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { CartPage } from "./pages/CartPage";
import { OrdersPage } from "./pages/OrdersPage";
import { RegisterPage } from "./pages/RegisterPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'login'}/>
            },
            {
                path: 'login', element: <LoginPage/>
            },
            {
                path: 'main', element: <MainPage/>
            },
            {
                path: 'cart', element: <CartPage/>
            },
            {
                path: 'orders', element: <OrdersPage/>
            },
            {
                path: 'register', element: <RegisterPage/>
            },
        ]
    }
]);

export {
    router
}