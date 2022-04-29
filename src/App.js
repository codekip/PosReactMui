import "./App.css";
import Product from "./components/Product";
import { Grid, Container } from "@mui/material";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container spacing={1}>
          <Product />
          <Product />
          <Product />
          <Product />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
