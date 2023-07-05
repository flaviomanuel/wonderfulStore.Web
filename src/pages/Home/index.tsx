import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import CardProduct from '../../Components/CardProduct';
import Header from '../../Components/Header';


function Home() {
  var products = [1, 2, 3, 4, 5, 6 ,7,8]
  return (
    <>
      <Header/>
     
        <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
           
            {products.map(product => (
              <CardProduct key={product}></CardProduct>
            ))}
              </Grid>
              
          </Container>
    </>
  )
}

export default Home;
