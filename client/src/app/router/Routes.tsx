import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import Login from "../../features/account/Login";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import Basketempty from "../../features/account/Basketempty";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import Register from "../../features/account/Register";
import RequireAuth from "./RequireAuth";
import Orders from "../../features/orders/orders";
import OrdersEmpty from "../../features/orders/ordersEmpty";

export const router = createBrowserRouter([
{
    path: '/',
    element: <App />,
    children: [
        {element: <RequireAuth />,children: [
            {path: 'checkout', element: <CheckoutPage />},
            {path: 'orders', element: <Orders />},
        ]},
        {path: '', element: <HomePage />},
        {path: 'about', element: <AboutPage />},
        {path: 'catalog', element: <Catalog />},
        {path: 'catalog/:id', element: <ProductDetails />},
        {path: 'contact', element: <ContactPage />},
        {path: 'login', element: <Login />},
        {path: 'register', element: <Register />},
        {path: 'server-error', element: <ServerError />},
        {path: 'not-found', element: <NotFound />},
        {path: 'basket', element: <BasketPage />},
        {path: 'basket-empty', element: <Basketempty />},
        {path: 'orders-empty', element: <OrdersEmpty />},
        {path: '*', element: <Navigate replace to='/not-found' />},
    ]
}
]
)