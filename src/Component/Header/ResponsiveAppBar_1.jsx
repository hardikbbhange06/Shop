import * as React from "react";
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
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import logo from "../IMG/Logo-2.png"





const pages = [
  "Mon-Thu:  9:00 AM - 5:30 PM ▼ ",
  "Visit our showroom in 1234 Street Adress City Address, 1234  Contact Us",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(2, 2, 2, 1)",
        color: "rgba(255, 255, 255, 1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <Box 
            sx={{
              backgroundColor:"rgba(1, 86, 255, 1)",
              borderRadius:"25px",
              height:"65px",
width:"45px",
              position:"absolute",
              marginTop:"15px"
            }}>
            <img src={logo} alt=""  style={{marginTop:"15px" ,color:'green',}} />

            </Box>

              {/* <MenuIcon /> */}
            </IconButton>
            
            
          </Box>
          <Typography
            // variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              // fontWeight: 600,
              // letterSpacing: '.3rem',
              color: "inherit",
              textDecoration: "none",
              ml:"22px"
            }}
          >
            Mon-Thu: 9:00 AM - 5:30 PM
            <ArrowDropDownIcon />
          </Typography>
          <Typography
            // variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              // fontWeight: 600,
              // letterSpacing: '.3rem',
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Contact Us
          </Typography>
          <Box sx={{ flexGrow: 1,
           display: { xs: "none", md: "flex" } 
           }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: -1, color: "white", display: "block", mr: "92px" }}
              >
                {page}
              </Button>
            ))}

            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              Call Us: (00) 1234 5678
              <FacebookIcon sx={{ ml: 1 }} />
              <InstagramIcon sx={{ ml: 1 }} />
            </Typography>
          </Box>

          <Box sx={{}}>
            <>
           
            </>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
