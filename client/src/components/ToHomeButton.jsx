import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ToWeatherHomeButton = () => {
  return (
    <div align="center">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained" disableElevation color="error">
          ホームに戻る
        </Button>
      </Link>
    </div>
  )
}

export default ToWeatherHomeButton;