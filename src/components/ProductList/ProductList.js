import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../features/products/productsSlice";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Product from "./Product/Product";

const ProductList = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

  console.log(products);

  return (
    <Container style={{ backgroundColor: "red" }} sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        {products &&
          products.length &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
