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

const Product = ( { productcode, description, available, image, id }) => {
  const [qty, setQty] = useState(0);

  const handleAdd = () => {
    console.log(qty);
    if (qty < available) {
      setQty(qty + 1);
    } else {
      setQty(available);
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
    if (event.target.value > available) {
      setQty(available);
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
          image={image}
          alt='A product'
          class='product-image'
        />
        <CardContent>
          <Grid container spacing={0}>
            <Typography variant='h5' color='text.secondary'>
              {productcode}
            </Typography>
          </Grid>
          <Typography variant='h8' color='text.secondary'>
           {description}
          </Typography>
        </CardContent>
        <Typography
          variant='h6'
          color='text.secondary'
          inline
          align='right'
          sx={{ marginRight: 10 }}
        >
          Available quantity: {available}
        </Typography>
      </CardActionArea>
      <CardActions className='cardactions'>
        <Button
          variant='contained'
          color='error'
          sx={{ marginRight: 1, fontSize: '2.1em', padding: 0 }}
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
          // eslint-disable-next-line no-const-assign
          label='Enter quantity'
          value={qty}
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant='contained'
          color='success'
          sx={{ marginRight: 1, fontSize: '2.1em', padding: 0 }}
          onClick={handleAdd}
        >
          {' '}
          +{' '}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
