import { Button, Container, Grid, MenuItem, TextField, Typography } from "@mui/material";
import Header from "../../Components/Header";
import Forms from "../../Components/Forms";

const RegisterProduct = () => {

    return (
        <>
            <Header/>
            <Forms
                title="Cadastrar produto"
                button={
                    <Button 
                        variant="contained" 
                        sx={{ width: '100%', mx: 'auto', my: 5}} 
                        size="large">
                            Cadastrar Produto
                    </Button>
                    } 
            />
        </>
    );
}

export default RegisterProduct;