import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import RegisterProduct from "./pages/RegisterProduct";
import UpdateProduct from "./pages/UpdateProduct";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<ProductPage/>} />
            <Route path="/register-product" element={<RegisterProduct/>} />
            <Route path="/update-product" element={<UpdateProduct/>} />
        </Routes>
    )
}