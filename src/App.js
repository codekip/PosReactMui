import "./App.css";
import Product from "./components/Product";
import { Grid, Container } from "@mui/material";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container spacing={1}>
          <Product productcode ='PS01254A' available={2} />
          <Product productcode ='PS25128A' available={3} />
          <Product productcode ='PS35415A' available={1} />
          <Product productcode ='PS87865A' available={7} />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
