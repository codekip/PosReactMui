import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  CardMedia,
  CardActions,
  CardActionArea,
  TextField,
} from "@mui/material";
// import {  } from "@mui/material";

const Product = () => {


  return (
    <Card className='acard' sx={{ maxWidth: 320 }}>
     <CardActionArea>
      <CardMedia
        component='img'
        height='194'
        image='https://images.unsplash.com/photo-1650369335952-abb47b6a81e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
        alt='A product'
      />
      <CardContent>
        <Grid container spacing={0}>
        <Typography variant='h5' color='text.secondary'>
          PS01223A
        </Typography>
             <Typography variant='h6' color='text.secondary'>
          PS01223A
        </Typography>
        </Grid>
        <Typography variant='h8' color='text.secondary'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions className='cardactions'>
        <Button variant='contained' color='error' sx={{ marginRight:1}}> - </Button>
        <TextField id='outlined-basic' variant='outlined' size='small' type='number' label='Enter Quantity'/>
        <Button variant='contained' color='success'>+</Button>
      </CardActions>
    </Card>
  );
};

export default Product;
