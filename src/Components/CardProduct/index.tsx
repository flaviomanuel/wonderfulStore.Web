import { Button, CardActions, CardContent, CardMedia, Typography, Card, Grid, Stack, Chip } from '@mui/material';
import { IProduct } from '../../shared/interfaces';
import PromotionChip from '../PromotionChip/PromotionChip';




function CardProduct({id, name, price, description, promotionType} : IProduct) {
  
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
                    {name}
                </Typography>
                <Typography fontWeight={"bold"} gutterBottom variant="h5" component="h2">
                    R$ {price}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardContent>
            <PromotionChip  promotionType={promotionType}/>
            <CardActions>
                <Button sx={{ width: '100%'}} variant='contained' size="medium">Adicionar no carrinho</Button>
            </CardActions>
            </Card>
      </Grid>
    )
  
}

export default CardProduct;
