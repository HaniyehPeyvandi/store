import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../features/products/productsSlice";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Product from "./Product/Product";

const ProductList = () => {
  const { items, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container style={{ backgroundColor: "red" }} sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
