import { Button, Container, Grid, GridTypeMap, MenuItem, TextField, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface FormsProps {
    button: JSX.Element
}

const Forms = ({ button } : FormsProps) => {
    
    var promotions = [
        {key:1, value:"Leve 2 pague 1"}, 
        {key: 2, value: "Pague 3 por R$10"}
    ]
    
    return (
        
         <Container   maxWidth="sm"  component="form" sx={{ mb: 4, border: "1px solid", borderColor: "#D3DAE1",borderRadius: 2, mt: 15}}>
        <Typography variant="h5" align="center" sx={{py: 4}}>
            Cadastro de produto
          </Typography>
                <Typography variant="h6" >
                Informe os valores
                </Typography>
                <Grid  container spacing={3}>
                    <Grid item xs={12} >
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Nome"
                        fullWidth
                        variant="filled"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="description"
                        name="description"
                        label="Descrição"
                        fullWidth
                        multiline
                        rows={4}
              
                        variant="filled"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        required
                        id="price"
                        name="price"
                        label="Preço"
                        fullWidth
                        variant="filled"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                    id="promotionType"
                    select
                    label="Promoção"

                    fullWidth
                    helperText="Selecione a promoção do produto"
                    variant="filled"
                    >
                    {promotions.map((promotion) => (
                        <MenuItem key={promotion.key} value={promotion.value}>
                            {promotion.value}
                        </MenuItem>
                    ))}
                    </TextField>
                    </Grid>
            </Grid>
           {button}
      </Container>
        
    )
}

export default Forms;