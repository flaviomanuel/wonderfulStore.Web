import { Button, CardActions, CardContent, CardMedia, Typography, Card, Grid, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import EditIcon from '@mui/icons-material/Edit';




function ManageCardProduct() {
    var products = [1, 2, 3, 4, 5, 6 ,7,8]
  
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
                <Typography fontWeight={"bold"} gutterBottom variant="h5" component="h2">
                 R$ 10.49
                </Typography>
                <Typography>
                Um dos mais fofos produtos da loja Wondeful, gato preso dentro de uma caixa de papelão.
                </Typography>
            </CardContent>
            <CardActions>
                <Box width={"100%"}>
                    <IconButton edge="end" aria-label="delete" color="error">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton sx={{marginLeft: 2}} edge="end" aria-label="update" color="warning">
                        <EditIcon />
                    </IconButton>
                </Box>
            </CardActions>
            </Card>
      </Grid>
    )
  
}

export default ManageCardProduct;
