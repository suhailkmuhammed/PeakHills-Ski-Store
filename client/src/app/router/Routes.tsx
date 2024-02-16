import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import Login from "../../features/login/Login";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import ShoppingCart from "../../features/shoppingcart/ShoppingCart";

export const router = createBrowserRouter([
{
    path: '/',
    element: <App />,
    children: [
        {path: '', element: <HomePage />},
        {path: 'about', element: <AboutPage />},
        {path: 'catalog', element: <Catalog />},
        {path: 'catalog/:id', element: <ProductDetails />},
        {path: 'contact', element: <ContactPage />},
        {path: 'login', element: <Login />},
        {path: 'server-error', element: <ServerError />},
        {path: 'not-found', element: <NotFound />},
        {path: 'shopping-cart', element: <ShoppingCart />},
        {path: '*', element: <Navigate replace to='/not-found' />},
    ]
}
]
)