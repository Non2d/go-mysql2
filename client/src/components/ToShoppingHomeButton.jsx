import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ToShoppingHomeButton = () => {
  return (
    <div align="center">
      <Link to="/shopping_home" style={{ textDecoration: 'none' }}>
        <Button variant="contained" disableElevation color="error" style={{ marginTop: 40 }}>
          ショッピング画面へ
        </Button>
      </Link>
    </div>
  )
}

export default ToShoppingHomeButton;