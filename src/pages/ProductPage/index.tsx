import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import OneProduct from "../../Components/OneProduct";
import queryString from "query-string";
import { ParsedQuery } from 'query-string';


interface IOneProduct {
    idProduct: string
}

const ProductPage = () => {

    const {search } = useLocation();
    const navigate = useNavigate()

    const { idProduct }  = queryString.parse(search);

    if(!idProduct){
        alert("Produto nao existente!")
        navigate('/')
    }



    return (
        <>
            <Header/>
            <OneProduct idProduct={idProduct}/>
        </>
    )
}

export default ProductPage;