import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import api from "../../services/api";
import { PromotionTypes } from "../../shared/types";
import { IProduct } from "../../shared/interfaces";
import { useEffect, useState } from "react";

interface IOneProduct {
    idProduct: string
}

const initialValuesProduct ={
    id: '',
    name: '',
    price: 0,
    description: '',
    promotionType: 0 as PromotionTypes,
  }
  

function OneProduct({ idProduct }: any) {
  
    const [product, setProduct] = useState<IProduct>(initialValuesProduct);

    const getProductById = async () => {
        try {
          const response = await api.get(`Product/GetById?Id=${idProduct}`)
            
          setProduct(response.data)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        getProductById()
    },
    [])

    return (
        <Container maxWidth="sm" sx={{ pt: 20}}>
        <Card
        
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', mx: 'auto'}}
            >
            <CardMedia
                component="div"
                sx={{
                // 16:9
                pt: '56.25%',
                }}
                image="https://images.unsplash.com/photo-1585583323619-327e6177d23b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                {product.name}
                </Typography>
                <Typography>
                {product.description}
                </Typography>
                <br/>
        
                <Typography fontWeight={"bold"} gutterBottom variant="h4" component="h2">
                 R${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to="/">
                    <Button sx={{ width: '100%'}} variant='contained' size="large"  endIcon={<ShoppingBasketIcon />}>
                            Comprar
                    </Button>
                </Link>
            </CardActions>
            </Card>
            </Container>
    )
  
}

export default OneProduct;