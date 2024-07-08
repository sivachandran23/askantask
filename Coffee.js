import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MyTab from './MyTab';

const Coffee = () => {
    return (
  
    <Container>
      <Box sx={{ my: 4 }}>
        <Box textAlign='center'>
       
        <h3>Our Products</h3>
        <Typography variant="h4" component="h1" gutterBottom>
          From Top Quality Materials
        </Typography>
             </Box>
       
        <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={6} md={4}>*/}
          <MyTab />
        </Grid>
        
      </Box>
    </Container>
  );
}

export default Coffee;
