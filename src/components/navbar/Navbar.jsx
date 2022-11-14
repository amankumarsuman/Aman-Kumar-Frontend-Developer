import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/SpaceX-Logo.png";
import MobileNavbar from "./MobileNavbar";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
    handleOpenNavMenu();
  };
  const handleClose = () => {
    setMenu(!menu);
    handleCloseNavMenu();
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="hidden sm md:flex items-center">
          <img src={logo} alt="logo" width="15%" />

          <ul className="hidden md:flex">
            <li>
              <Link to="/" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="capsule" smooth={true} duration={500}>
                CAPSULE
              </Link>
            </li>
            <li>
              <Link to="falcon-heavy" smooth={true} duration={500}>
                FALCON HEAVY
              </Link>
            </li>
            <li>
              <Link to="dragon" smooth={true} duration={500}>
                DRAGON
              </Link>
            </li>
            <li>
              <Link to="starship" smooth={true} duration={500}>
                STARSHIP
              </Link>
            </li>
            <li>
              <Link to="human-spaceship" smooth={true} duration={500}>
                HUMAN SPACESHIP
              </Link>
            </li>
            <li>
              <Link to="rideshare" smooth={true} duration={500}>
                RIDESHARE
              </Link>
            </li>
            <li>
              <Link to="starship" smooth={true} duration={500}>
                STARLINK
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 w-2/5 pt-4">
          <button className="border bg-white text-black mr-4 w-2/5">BUY</button>
          <button className="px-8 py-3 w-6/12 "> SIGN UP</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          <MobileNavbar
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
