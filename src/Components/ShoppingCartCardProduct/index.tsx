import { Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material";

const ShoppingCartCardProduct = () => {

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
                        Caixa de papelão com gato
                        </Typography>
                        <Typography fontWeight={"bold"} gutterBottom variant="h6" component="h6">
                        R$ 10.49
                        </Typography>
                        <Typography>
                        Um dos mais fofos produtos da loja Wondeful, gato preso dentro de uma caixa de papelão.
                        </Typography>
                    </CardContent>
                    <Container component={"div"}   sx={{ width: '100%', mx: 'auto', my: 2, }}>
                        <TextField
                            label="Quantidade"
                            id="quantity"
                            type="number"
                            size="small"
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