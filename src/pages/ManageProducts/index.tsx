import { Button, Container, Grid } from "@mui/material";
import Header from "../../Components/Header";
import ManageCardProduct from "../../Components/ManageCardProduct";
import { useEffect, useState } from "react";
import { IProduct } from "../../shared/interfaces";
import api from "../../services/api";
import { PromotionTypes } from "../../shared/types";

const initialValuesProduct ={
  id: '',
  name: '',
  price: 0,
  description: '',
  promotionType: 0 as PromotionTypes,
}


const ManageProducts = () => {
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

    return(
        <>
        <Header/>
       
          <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
             
              {products.map(product => (
                <ManageCardProduct
                 key={product.id}
                 id={product.id}
                 name={product.name}
                 description={product.description}
                 price={product.price}
                 promotionType={product.promotionType}
                 
                />
              ))}
                </Grid>
                
            </Container>
      </>
    )
}


export default ManageProducts;