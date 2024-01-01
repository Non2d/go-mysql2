import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ToHomeButton = () => {
  return (
    <div align="center">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained" disableElevation color="error">
          Homeに戻る
        </Button>
      </Link>
    </div>
  )
}

export default ToHomeButton;