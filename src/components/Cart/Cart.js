import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  return (
    <Box
      sx={{ width: 310, height: "100%", position: "relative" }}
      role="presentation"
    >
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <ShoppingBagOutlinedIcon sx={{ mr: 1 }} />
        <Typography variant="subtitle2" component="p">
          2 items
        </Typography>
      </Box>
      <Divider />
      <CartItem/>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          px: 3,
          py: 2,
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          sx={{ width: "100%", mb: 1, textTransform: "capitalize" }}
        >
          CheckOut Now $(475)
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "100%", textTransform: "capitalize" }}
        >
          View Cart
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
