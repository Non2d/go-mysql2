import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ToWeatherHomeButton = () => {
  return (
    <div align="center">
      <Link to="/weather_home" style={{ textDecoration: 'none' }}>
        <Button variant="contained" disableElevation color="error">
          天気のホームに戻る
        </Button>
      </Link>
    </div>
  )
}

export default ToWeatherHomeButton;