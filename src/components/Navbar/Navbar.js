import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar sx={{ p: { sm: 0 } }}>
            <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              Store
            </Typography>

            <IconButton onClick={() => setOpen(true)}>
              <Badge badgeContent={1} color="error">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
            <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
              <Cart />
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
