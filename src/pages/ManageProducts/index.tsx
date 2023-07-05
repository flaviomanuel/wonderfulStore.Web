import { Container, Grid } from "@mui/material";
import Header from "../../Components/Header";
import ManageCardProduct from "../../Components/ManageCardProduct";

const ManageProducts = () => {
  var products = [1, 2, 3, 4, 5, 6 ,7,8]

    return(
        <>
        <Header/>
       
          <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
             
              {products.map(product => (
                <ManageCardProduct key={product}></ManageCardProduct>
              ))}
                </Grid>
                
            </Container>
      </>
    )
}


export default ManageProducts;