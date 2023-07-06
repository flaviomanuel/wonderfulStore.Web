import { Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material";
import { IProduct } from "../../shared/interfaces";
import PromotionChip from "../PromotionChip/PromotionChip";
import { useState } from "react";
import api from "../../services/api";


interface IShoppingCartCardProduct {
    product:  IProduct,
    quantity: number,
    totalPrice: number
}

interface IstateQuantity {
    quantity: number
}

const  existShoppingCartCreated = localStorage.getItem("idShoppingCart");


const ShoppingCartCardProduct = ({product, quantity, totalPrice} : IShoppingCartCardProduct) => {

    const [_quantity, setQuantity] = useState<IstateQuantity>({quantity});

    function onChangeQuantity(event: React.ChangeEvent<HTMLInputElement>) {

        
        setQuantity({..._quantity, [event.target.name]: event.target.value});
    }

    const updateProductQuantity = () => {

        const data = {
           quantity: _quantity ? Number(_quantity.quantity) : _quantity,
        }
        try {
            api.put(`ShoppingCartProduct/UpdateQuantityOfProduct?idProduct=${product.id}&idShoppingCart=${existShoppingCartCreated}`, data)

            alert(`Quantidade do produto ${product.name} atualizado com sucesso`)
        } catch (error) {
            alert(error)
        }
    }
    console.log(_quantity)

    return (
        <Grid sx={{mb: 3}} spacing={2}>
            <Grid item  key={1} >
                <Card
                sx={{  display: 'flex', flexDirection: 'column',  maxWidth: 300, mx: 'auto' }}
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
                        <Typography gutterBottom variant="h6" component="h6">
                            {product.name}
                        </Typography>
                        {/* <Typography fontWeight={"bold"} gutterBottom variant="h6" component="h6">
                           Preço Unico R$ {product.price}
                        </Typography> */}
                        <Typography fontWeight={"bold"} gutterBottom variant="h6" >
                           Promoção por R${totalPrice}
                        </Typography>
                        <Typography fontWeight={"bold"} gutterBottom variant="h6" >
                           preço do produto R${product.price}
                        </Typography>
                        <Typography>
                            {product.description}
                        </Typography>
                    </CardContent>
                        <PromotionChip promotionType={product.promotionType}/>
                    <Container component={"div"}   sx={{ width: '100%', mx: 'auto', my: 2, }}>
                        <TextField
                            label="Quantidade"
                            id="quantity"
                            name="quantity"
                            type="number"
                            size="small"
                            onChange={onChangeQuantity}
                            value={_quantity.quantity}
                            sx={{
                                mx: 'auto',
                                width: '100%'
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />                            
                    <Button
                        type="submit" 
                        variant="contained" 
                        color="success" 
                        size="medium"
                        sx={{
                            mx: 'auto',
                            width: '100%',
                            my: 2
                        }}
                        onClick={updateProductQuantity}
                    >
                        Atualizar quantidade
                    </Button>

                    <Button
                        variant="contained" 
                        color="error" 
                        size="small"
                        sx={{
                            mx: 'auto',
                            width: '100%',
                        }}
                    >
                        Remover produto do carrinho
                    </Button>
                    </Container>
                </Card>
            </Grid>
    </Grid>
    )
}

export default ShoppingCartCardProduct;