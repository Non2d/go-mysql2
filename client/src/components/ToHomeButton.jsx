import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ToWeatherHomeButton = () => {
  return (
    <div align="center">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" disableElevation color="error" style={{ marginTop: 40 }}>
          ホーム画面へ
        </Button>
      </Link>
    </div>
  )
}

export default ToWeatherHomeButton;