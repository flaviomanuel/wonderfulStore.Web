import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";



function OneProduct() {
  
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
                Caixa de papelão com gato
                </Typography>
                <Typography>
                Um dos mais fofos produtos da loja Wondeful, gato preso dentro de uma caixa de papelão.
                </Typography>
                <br/>
        
                <Typography fontWeight={"bold"} gutterBottom variant="h4" component="h2">
                 R$ 10.49
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