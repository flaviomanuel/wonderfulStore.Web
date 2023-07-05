import { Button, Container, Grid, GridTypeMap, MenuItem, TextField, Typography } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import api from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from 'react-router';
import queryString from "query-string";
import { PromotionTypes } from "../../shared/types";

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

    const {search } = useLocation();
    const { idProduct} = queryString.parse(search);
    
    const isUpdateProductPage = idProduct !== null && idProduct !== undefined && idProduct !== '';
    
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

    const getProductData = async () =>{
        try {
            var response = await api.get(`Product/GetById?Id=${idProduct}`);
            setValues(response.data)
        } catch (error) {
            alert(error)
        }
    }

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {

        console.log(values)

        setValues({...values, [event.target.name]: event.target.value})
    }

    const createProductRequest = async () => {
        try {
            await api.post("/Product/Add", values);

           alert('Produto cadastrado com sucesso!')
          
       } catch (error) {
           alert(error)
       }
    }

    const updateProductRequest = async () => {
        try {
            await api.put("/Product/Update", values);

           alert('Produto atualizado com sucesso!')
       } catch (error) {
           alert(error)
       }
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();


   
        isUpdateProductPage ? await updateProductRequest() : await createProductRequest()

        navigate("/")


    }

    useEffect(() => {
        getAllPromotionTypes();

       if(isUpdateProductPage) {
            getProductData()
       }
    }, [idProduct])

    console.log("values: ", values)
    console.log("isUpdateProductPage: ", isUpdateProductPage)
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
                        value={values.name}
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
                        value={values.description}
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
                        type="number"
                        id="price"
                        name="price"
                        label="Preço"
                        value={values.price}
                        fullWidth
                        variant="filled"
                        onChange={onChange}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                    id="promotionType"
                    name="promotionType"
                    select
                    label="Promoção"
                    value={values.promotionType}
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