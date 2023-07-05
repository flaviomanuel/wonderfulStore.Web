import { Button, CardActions, CardContent, CardMedia, Typography, Card, Grid } from '@mui/material';




function CardProduct() {
  
    return (
         
        <Grid item key={1} xs={12} sm={6} md={4}>
            <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
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
            </CardContent>
            <CardActions>
                <Button variant='contained' size="medium">Adicionar no carrinho</Button>
            </CardActions>
            </Card>
      </Grid>
    )
  
}

export default CardProduct;
// return (
//     <Card sx={{  width:300,height: '100%', display: 'flex', flexDirection: 'column', margin: 3 }}>
//         <CardMedia
//             component="img"
//             alt="green iguana"
//             height="140"
//             image="https://images.unsplash.com/photo-1585583323619-327e6177d23b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
//         />
//         <CardContent sx={{ flexGrow: 1 }}>
//             <Typography gutterBottom variant="h5" component="div">
//             Caixa de papelação com gato
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//             </Typography>
//         </CardContent>
//         <CardActions>
//             <Button size="small">Comprar</Button>
//         </CardActions>
//     </Card>
//   );