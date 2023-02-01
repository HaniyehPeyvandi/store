import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              Store
            </Typography>

            <div>
              <IconButton size="large" >
                <Badge badgeContent={1} color="error">
                  <ShoppingBagOutlinedIcon />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
