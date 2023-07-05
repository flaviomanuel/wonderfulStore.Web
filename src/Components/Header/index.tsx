import { AppBar, Box, Button, IconButton, Toolbar, Typography  } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from "react-router-dom";


function Header() {
  
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <StoreIcon fontSize='large' />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                Wonderful Store
              </Typography>
              {/* <Link href="#" sx={{ marginRight: 6}} color="inherit"> */}
                <Link to="/">
                    <Button color="warning" sx={{ color: "white"}} variant="text">
                          Produtos
                    </Button>
                </Link>
                <Link to="/manage-products">
                    <Button color="warning" sx={{ color: "white"}} variant="text">
                          Gerenciar Produtos
                    </Button>
                </Link>
                <Link to="/shoppingCart">
                    <Button color="warning" sx={{ color: "white"}} variant="text">
                      Carrinho de compras
                    </Button>
                </Link>
              {/* </Link> */}

              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Header;
