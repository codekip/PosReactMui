import React, { useState } from 'react';
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
} from '@mui/material';

const Product = (props) => {
  const [qty, setQty] = useState(null);

  const handleAdd = () => {
    console.log(qty);
    if (qty < props.available) {
      setQty(qty + 1);
    } else {
      setQty(props.available);
    }
  };
  const handleSub = () => {
    if (qty > 0) {
      setQty(qty - 1);
    } else {
      setQty(0);
    }
  };

  const handleChange = (event) => {
    if (event.target.value > props.available) {
      setQty(props.available);
    } else if (event.target.value <= 0) {
      setQty("");
    } else {
      setQty(event.target.value);
    }
  };

  return (
    <Card className='acard' sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='194'
          image='https://images.unsplash.com/photo-1650369335952-abb47b6a81e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
          alt='A product'
          class='product-image'
        />
        <CardContent>
          <Grid container spacing={0}>
            <Typography variant='h5' color='text.secondary'>
              {props.productcode}
            </Typography>
          </Grid>
          <Typography variant='h8' color='text.secondary'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Typography>
        </CardContent>
        <Typography
          variant='h6'
          color='text.secondary'
          inline
          align='right'
          sx={{ marginRight: 10 }}
        >
          Available quantity: {props.available}
        </Typography>
      </CardActionArea>
      <CardActions className='cardactions'>
        <Button
          variant='contained'
          color='error'
          sx={{ marginRight: 1 }}
          onClick={handleSub}
        >
          {' '}
          -{' '}
        </Button>
        <TextField
          id='outlined-basic'
          variant='outlined'
          size='small'
          type='number'
          label='Enter Quantity'
          value={qty}
          onChange={(e) => handleChange(e)}
        />
        <Button variant='contained' color='success' onClick={handleAdd}>
          {' '}
          +{' '}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
