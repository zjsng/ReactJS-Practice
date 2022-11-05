import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

// Styles
const linkTextStyle = { 
  textDecoration: "none",
  alignItems: "center",
  color: "#EFEAD8" 
};

const typographyLinkStyle = {
  '&:hover': {
    backgroundColor: '#6D8B74',
    opacity: [0.9, 0.8, 0.7],
  }
};

export const Navbar = () => {
  // Hooks
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Handlers
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mini-Components
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#6D8B74', color: '#EFEAD8' }}>
      <IconButton color="inherit">
        <MenuIcon color="inherit" fontSize="large" />
      </IconButton>
      <Divider />
      <List>
        <ListItem disablePadding>
          <Link to="/dashboard" style={linkTextStyle}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/popular" style={linkTextStyle}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Popular Players" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/scores" style={linkTextStyle}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Scores" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        height: "fit-content",
        backgroundColor: '#6D8B74',
        padding: { xs: "0.4em", md: "1rem" },
        color: "#EFEAD8"
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          gap: "2rem",
          color: "inherit"
        }}
      >
        <Typography variant="h5" sx={typographyLinkStyle}>
          <Link to="/dashboard" style={linkTextStyle}>Dashboard</Link>
        </Typography>
        <Typography variant="h5" sx={typographyLinkStyle}>
          <Link to="/popular" style={linkTextStyle}>Popular Players</Link>
        </Typography>
        <Typography variant="h5" sx={typographyLinkStyle}>
          <Link to="/scores" style={linkTextStyle}>Scores</Link>
        </Typography>
      </Container>
      <Container
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "left"
        }}
      >
        <IconButton color="inherit" onClick={handleDrawerToggle}>
          <MenuIcon color="inherit" fontSize="large" sx={{ color: mobileOpen ? "#6D8B74" : "#EFEAD8" }} />
        </IconButton>
      </Container>
      <Box>
        <Drawer
          variant="temporary"
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            opacity: '0.85',
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "100%" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;