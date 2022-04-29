import "./App.css";
import Card from "./components/Card";
import { Grid, Container } from "@mui/material";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
