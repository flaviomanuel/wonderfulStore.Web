import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography  } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import DeleteIcon from '@mui/icons-material/Delete';

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
              <Link href="#" sx={{ marginRight: 6}} color="inherit">
              <Button color="warning" sx={{ color: "white"}} variant="text">
                  <Link underline="none" color={"white"} href="/">
                    Produtos
                  </Link>
              </Button>
              <Button color="warning" sx={{ color: "white"}} variant="text">
                  <Link underline="none" color={"white"} href="/manage-products">
                    Gerenciar Produtos
                  </Link>
              </Button>
              <Button color="warning" sx={{ color: "white"}} variant="text">
                  <Link underline="none" color={"white"} href="/manage-products">
                    Carrinho de compras
                  </Link>
              </Button>
              </Link>

              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Header;
