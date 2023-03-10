import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const { items, totalCount } = useSelector((state) => state.cart);

  const totalPrice = items.length
    ? items.reduce((total, item) => (total += item.price * item.quantity), 0)
    : 0;

  return (
    <Box
      sx={{
        width: 310,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
      }}
      role="presentation"
    >
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <ShoppingBagOutlinedIcon sx={{ mr: 1 }} />
          <Typography variant="subtitle2" component="p">
            {totalCount} items
          </Typography>
        </Box>
        <Divider />
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <Typography
            variant="subtitle1"
            component="p"
            sx={{ textAlign: "center", mt: 2 }}
          >
            Your cart is empty
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          px: 3,
          py: 2,
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          sx={{ width: "100%", mb: 1, textTransform: "capitalize" }}
        >
          CheckOut Now $({Math.floor(totalPrice * 100) / 100})
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
