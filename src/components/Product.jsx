import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  TextField,
} from "@mui/material";
// import {  } from "@mui/material";

const Product = () => {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        component='img'
        height='194'
        image='https://images.unsplash.com/photo-1650369335952-abb47b6a81e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
        alt='A product'
      />
      <CardContent>
        <Typography variant='h5' color='text.secondary'>
          PS01223A
        </Typography>
        <Typography variant='h8' color='text.secondary'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained'>-</Button>
        <TextField id='outlined-basic' label='' variant='outlined' />
        <Button variant='contained'>+</Button>
      </CardActions>
    </Card>
  );
};

export default Product;
