import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Product from "./Product/Product";

const ProductList = () => {
  return (
    <Container style={{ backgroundColor: "red" }}>
      <Grid container spacing={3}>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </Grid>
    </Container>
  );
};

export default ProductList;
