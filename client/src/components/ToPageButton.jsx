import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ToPageButton = ({ link, label }) => {
  return (
    <div align="center">
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Button variant="outlined" disableElevation color="error" style={{ marginTop: 40 }}>
          {label}
        </Button>
      </Link>
    </div>
  )
}

export default ToPageButton;