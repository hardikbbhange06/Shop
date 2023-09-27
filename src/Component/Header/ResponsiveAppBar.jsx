import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, useMediaQuery } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../IMG/Logo.png"

const pages = [
    "Laptops",
    "Desktop PCs",
    "Networking Devices",
    "Printers & Scanners",
    "PC Parts",
    "All Other Products",
    "Repairs",
  ];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };



  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor:   'rgba(255, 255, 255, 1)',
        color: 'rgba(0, 0, 0, 1)',
        '@media (max-width: 600px)': {
          backgroundColor: 'rgba(1, 86, 255, 1)',
        },
      
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <img src={logo} alt=""  />

        </Box>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* LOGO */}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ color: "rgba(0, 0, 0, 1)" }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1,bgcolor:"rgba(255, 255, 255, 1)",borderRadius:"25px" }}>
            <IconButton size="large" aria-label="search" color="inherit">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
              sx={{ color: "inherit", marginLeft: 1 }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "rgba(0, 0, 0, 1)", display: "block" }}
              >
                {page}
              </Button>
            ))}

            <Button
              sx={{
               
                borderRadius: "50px",
                border: "2px solid rgba(1, 86, 255, 1)",
                // backgroundColor: 'rgba(1, 86, 255, 1)',
                padding: "8px 26px",
                margin: "10px",
                "&:hover": {
                  backgroundColor: "rgba(1, 86, 255, 0.7)",
                  color: "rgba(255, 255, 255, 1)",
                },
              }}
            >
              Button
            </Button>

            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", ml:"105px", }}>
              <IconButton
                size="large"
                aria-label="search"
                color="inherit"
                onClick={handleSearchClick}
                
              >
                <SearchIcon />
              </IconButton>
              {isSearchOpen && (
                <InputBase
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                  sx={{ color: "inherit", marginLeft: 1 }}
                />
              )}

              <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={2} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        {/* <p>Notifications</p> */}
      </MenuItem>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
