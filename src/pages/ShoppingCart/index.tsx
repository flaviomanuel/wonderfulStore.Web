import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material";
import Header from "../../Components/Header";
import CardProduct from "../../Components/CardProduct";
import ShoppingCartCardProduct from "../../Components/ShoppingCartCardProduct";


const ShoppingCart = () => {

  var products = [1, 2, 3]

    return (
        <>

        <Header/>
     
            <Container  sx={{ py: 8 }} maxWidth="sm">
                {products.map(product => (
                    <ShoppingCartCardProduct key={product}/>
                ))}
                
            </Container>
        </>
    )
}

export default ShoppingCart;