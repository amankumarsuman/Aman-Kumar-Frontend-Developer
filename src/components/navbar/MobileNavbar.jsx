import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import React from "react";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/SpaceX-Logo.png";
import { Link } from "react-router-dom";

const pages = [
  "HOME",
  "CAPSULE",
  "FALCON HEAVY",
  "DRAGON",
  "HUMAN SPACESHIP",
  "RIDESHARE",
  "STARLINK",
];
function MobileNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,

          display: { xs: "flex", md: "none" },
        }}
      >
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
            <Link to={page.split(" ").join("-").toLowerCase()}>
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
        <Link to="/">
          <div
            style={{
              textAlign: "center",
              width: "60%",
              margin: "auto",
            }}
          >
            <img src={logo} alt="logo" width="55%" />
          </div>
        </Link>
      </Box>
    </>
  );
}

export default MobileNavbar;
