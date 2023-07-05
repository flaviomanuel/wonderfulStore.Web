import { Button } from "@mui/material";
import Header from "../../Components/Header";
import Forms from "../../Components/Forms";

const UpdateProduct = () => {

    return (
        <>
            <Header/>
            <Forms
                title="Atualizar produto"
                button={
                    <Button
                        type="submit" 
                        variant="contained" 
                        color="success" 
                        sx={{ width: '100%', mx: 'auto', my: 5}} 
                        size="large"
                    >
                        Atualizar Produto
                    </Button>
                }  
            />
        </>
    );
}

export default UpdateProduct;