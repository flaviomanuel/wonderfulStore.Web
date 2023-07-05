import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import CardProduct from '../../Components/CardProduct';
import Header from '../../Components/Header';
import { useEffect, useState } from 'react';
import { IProduct } from '../../shared/interfaces';
import { PromotionTypes } from '../../shared/types';
import api from '../../services/api';

const initialValuesProduct ={
  id: '',
  name: '',
  price: 0,
  description: '',
  promotionType: 0 as PromotionTypes,
}


function Home() {
  const [products, setProducts] = useState<IProduct[]>([initialValuesProduct])

  const GetAllProducts = async () => {
      try {
          const response = await api.get("Product/GetAll");
          setProducts(response.data);
      } catch (error) {
          alert(error);
      }
  }

  useEffect(() => {
      GetAllProducts();
  }, [])

  return (
    <>
      <Header/>
     
        <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
           
            {products.map(product => (
              <CardProduct 
                key={product.id}
                id={product.name}
                name={product.name}
                price={product.price}
                description={product.description}
                promotionType={product.promotionType}
                />
            ))}
              </Grid>
              
          </Container>
    </>
  )
}

export default Home;
