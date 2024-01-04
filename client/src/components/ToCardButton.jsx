import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ToCardButton = () => {
  return (
    <div align="center">
      <Link to="/card" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" disableElevation color="error" style={{ marginTop: 40 }}>
          カード画面へ
        </Button>
      </Link>
    </div>
  )
}

export default ToCardButton;