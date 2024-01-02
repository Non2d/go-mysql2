import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

// ここにページ名，url，アイコンを記入
const pages = [
  {name: 'Home', link: '/', icon: <HomeIcon fontSize="large" />}, 
];

const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor: '#111'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            {props.title}
          </Typography>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link
                    to={page.link}
                    style={{textDecoration: 'None'}}
                  >
                    <Typography 
                      textAlign="start" 
                      style={{
                        width: 200, 
                        maxWidth: '100%', 
                        color: '#666' 
                      }}
                    >
                      <span style={{marginRight: '1vw', verticalAlign: 'middle'}}>{page.icon}</span>
                      <span style={{fontSize: '20px'}}>{page.name}</span>
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                key={page.name}
                to={page.link}
                sx={{ my: 2, color: 'white', display: 'block'}}
                style={{textDecoration: 'None'}}
              >
                <p style={{color: 'white', margin: '0 0 0 5vw'}}>{page.name}</p>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;