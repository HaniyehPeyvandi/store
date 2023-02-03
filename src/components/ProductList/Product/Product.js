import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import styles from "./Product.module.css";
import { addToCart } from "../../../features/cart/cartSlice";
import { toast } from "react-toastify";

const Product = ({ item }) => {
  const { title, price, image, rating } = item;
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    toast.success("Added to cart", {
      autoClose: 3000,
      theme: "light",
    });
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper
        elevation={2}
        sx={{
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={image} alt={title} className={styles.img} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 5,
          }}
        >
          <Box>
            <Tooltip title={title} placement="top-start">
              <Typography
                variant="subtitle1"
                component="h2"
                sx={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "145px",
                }}
              >
                {title}
              </Typography>
            </Tooltip>
            <Rating
              name="read-only"
              value={rating.rate}
              precision={0.1}
              size="small"
              readOnly
              sx={{ py: 1 }}
            />
            <Typography variant="subtitle2" component="p">
              $ {price}
            </Typography>
          </Box>
          <Box sx={{ alignSelf: "flex-end" }}>
            <Button
              variant="outlined"
              sx={{ minWidth: 0, p: 0 }}
              onClick={() => addToCartHandler(item)}
            >
              <AddIcon />
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Product;
