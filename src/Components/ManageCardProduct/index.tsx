import { Button, CardActions, CardContent, CardMedia, Typography, Card, Grid, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import EditIcon from '@mui/icons-material/Edit';
import { IProduct } from '../../shared/interfaces';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import PromotionChip from '../PromotionChip/PromotionChip';




function ManageCardProduct({id, name, price, description, promotionType} : IProduct) {
 
    const navigate = useNavigate();

    const deleteProductByid = async () => {
        try {
          await api.delete(`Product/Delete/${id}`);

          alert(`Produto ${name} deletado com sucesso`)
          location.reload()
          
        } catch (error) {
          alert(error);
        }
      }

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
                 R${price}
                </Typography>
                <Typography>
                {description}
                </Typography>
            </CardContent>
            <PromotionChip  promotionType={promotionType} />
            <CardActions>
                <Box width={"100%"}>
                    <IconButton  onClick={deleteProductByid} edge="end" aria-label="delete" color="error">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => navigate(`/update-product?idProduct=${id}`)} sx={{marginLeft: 2}} edge="end" aria-label="update" color="warning">
                        <EditIcon />
                    </IconButton>
                </Box>
            </CardActions>
            </Card>
      </Grid>
    )
  
}

export default ManageCardProduct;
