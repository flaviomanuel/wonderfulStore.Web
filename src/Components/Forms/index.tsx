import { Button, Container, Grid, GridTypeMap, MenuItem, TextField, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FormEvent, useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

interface FormsProps {
    button: JSX.Element,
    title: string,
}

interface IInitialValues {
    name: string,
    description: string,
    price: number,
    promotionType: PromotionTypes,
}

type PromotionTypes =  0 | 1 | 2

interface Promotions  {
    key: '',
    value: PromotionTypes
}


const initialValue = {
    name: '',
    description: '',
    price: 0,
    promotionType: 0 as PromotionTypes,
}



const Forms = ({ button, title  } : FormsProps) => {
    
    const navigate = useNavigate();

    const[values, setValues] = useState<IInitialValues>(initialValue)

    const[promotionTypes, setPromotionTypes] = useState<Array<Promotions>>()

    const getAllPromotionTypes = async () => {
        try {
            const response = await api.get("/Promotion/ListAllPromotionTypes");
            setPromotionTypes(response.data)
            
        } catch (error) {
            alert(error)
        }
    }

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {

        console.log(values)

        setValues({...values, [event.target.name]: event.target.value})
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
             await api.post("/Product/Add", values);

            alert('Produto cadastrado com sucesso!')
            navigate("/")
        } catch (error) {
            alert(error)
        }


    }

    useEffect(() => {
        getAllPromotionTypes();
    }, [])
    
    return (
        
         <Container   maxWidth="sm" onSubmit={handleSubmit}  component="form" sx={{ mb: 4, border: "1px solid", borderColor: "#D3DAE1",borderRadius: 2, mt: 15}}>
        <Typography variant="h5" align="center" sx={{py: 4}}>
            {title}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                    onChange={onChange}
                    >
                    {promotionTypes?.map((promotion) => (
                        <MenuItem key={promotion.key} value={promotion.value}>
                            {promotion.key}
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