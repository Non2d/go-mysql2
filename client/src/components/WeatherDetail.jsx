import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const WeatherDetail = (props) => {
  return (
    <>
      <Card
        sx={{ width: {sm: '80%', md: '30%'}, height: {md: '50vh'},margin: '5vh auto' }}
        variant="outlined"
      >
        <CardContent 
          sx={{ p: 2, textAlign: 'center' }}
        >
          <Typography sx={{ fontSize: {sm: 24, md: 16, lg: 24}, pb: {md: 8}}}>
            { props.date }の天気：{ props.forecasts }
          </Typography>
          <img src={ props.image } width="200px" />
        </CardContent>
      </Card>
    </>
  );
};

export default WeatherDetail;