import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<ProductPage/>} />
        </Routes>
    )
}