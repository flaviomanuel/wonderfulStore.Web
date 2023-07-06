import { Container } from "@mui/material";
import Header from "../../Components/Header";
import ShoppingCartCardProduct from "../../Components/ShoppingCartCardProduct";
import { PromotionTypes } from "../../shared/types";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { IProduct } from "../../shared/interfaces";
import { useNavigate } from "react-router-dom";


const initialValuesProduct ={
  product : { 
    id: '',
    name: '',
    price: 0,
    description: '',
    promotionType: 0 as PromotionTypes
},
quantity: 0,
totalPrice: 0
}
interface IShoppingCart  {
    product:  IProduct,
    quantity: number,
    totalPrice: number
}





const  existShoppingCartCreated = localStorage.getItem("idShoppingCart");

const ShoppingCart = () => {

    const navigate = useNavigate();

    const [productsCart, setProductsCart] = useState<IShoppingCart[]>([initialValuesProduct])

    const GetAllProductsFromShoppingCart = async () => {
        try {

            const response = await api.get(`/ShoppingCartProduct/GetAllProductsFromShoppingCartById?IdShoppingCart=${existShoppingCartCreated}`);
            setProductsCart(response.data);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        if(existShoppingCartCreated){
            GetAllProductsFromShoppingCart();
        }else {
            alert("Crie se carrinho de compras")
            navigate('/')
        }
    }, [])

    return (
        <>
        <Header/>
            <Container  sx={{ py: 8 }} maxWidth="sm">
                {productsCart.map(productCart => (
                    <ShoppingCartCardProduct 
                    key={productCart.product.id} 
                    quantity={productCart.quantity}
                    totalPrice={productCart.totalPrice}
                    product={productCart.product}
                    />
                ))}
                
            </Container>
        </>
    )
}

export default ShoppingCart;