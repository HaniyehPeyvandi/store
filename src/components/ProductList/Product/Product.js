import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <Grid item xs={12} sm={3}>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
            alt=""
            className={styles.img}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Box>
            <Typography variant="subtitle1" component="h2">
              product title
            </Typography>
            <Rating
              name="read-only"
              value={3}
              precision={0.1}
              size="small"
              readOnly
              sx={{ py: 1 }}
            />
            <Typography variant="subtitle2" component="p">
              $ 100
            </Typography>
          </Box>
          <Box sx={{ alignSelf: "flex-end" }}>
            <Button variant="outlined" sx={{ minWidth: 0, p: 0 }}>
              <AddIcon />
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Product;
