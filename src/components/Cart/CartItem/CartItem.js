import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const { id, quantity, image, title, price } = item;
  const dispatch = useDispatch();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              mx: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <IconButton onClick={() => dispatch(incrementQuantity(id))}>
              <AddIcon />
            </IconButton>
            <Typography variant="subtitle2" component="p">
              {quantity}
            </Typography>
            <IconButton onClick={() => dispatch(decrementQuantity(id))}>
              <RemoveIcon />
            </IconButton>
          </Box>
          <Box sx={{ mx: 1 }}>
            <img src={image} alt={title} style={{ width: "60px" }} />
          </Box>
          <Box sx={{ mx: 1 }}>
            <Typography variant="subtitle2" component="p">
              {title}
            </Typography>
            <Typography variant="caption" component="p" sx={{ lineHeight: 1 }}>
              ${price} &times; {quantity}
            </Typography>
            <Typography variant="subtitle2" component="p" sx={{ mt: 0.75 }}>
              ${price * quantity}
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={() => dispatch(removeItem(id))}>
          <CloseRoundedIcon fontSize="small" />
        </IconButton>
      </Box>
      <Divider />
    </>
  );
};

export default CartItem;
