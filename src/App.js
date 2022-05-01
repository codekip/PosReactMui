import "./App.css";
import Product from "./components/Product";
import { Grid, Container } from "@mui/material";
import React from "react";

const products = [

  { productcode: 'PS12548A', description: "Product 1", available: 2, image: "https://via.placeholder.com/150/0000FF/808080" },
  { productcode: 'PS12558A', description: "Product 2", available: 3, image: "https://via.placeholder.com/150/FF0000/FFFFFF" },
  { productcode: 'PS12568A', description: "Product 3", available: 20, image: "https://via.placeholder.com/150/FFFF00/000000" },
  { productcode: 'PS12578A', description: "Product 4", available: 6, image: "https://via.placeholder.com/150/FFFF00/008000" },
]

function App() {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container spacing={1}>
          {products.map((product) => <Product key={product.productcode} productcode={product.productcode} description={product.description} image={product.image} available={product.available} />)}

        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
