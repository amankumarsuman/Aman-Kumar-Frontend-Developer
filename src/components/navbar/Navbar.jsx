import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/SpaceX-Logo.png";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);
  const handleClose = () => setMenu(!menu);
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
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
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            BUY
          </button>
          <button className="px-8 py-3 "> SIGN UP</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!menu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>
      </div>

      <ul
        className={
          !menu ? "hidden" : "absolute border-zinc-200 w-full px-8 md:hidden"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="capsule" onClick={handleClose} smooth={true} offset={200}>
            CAPSULE
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="falcon-heavy"
            onClick={handleClose}
            smooth={true}
            offset={-200}
          >
            FALCON HEAVY
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="dragon" onClick={handleClose} smooth={true} offset={-50}>
            DRAGON
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="starship" onClick={handleClose} smooth={true} offset={-100}>
            STARSHIP
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="human-spaceship"
            onClick={handleClose}
            smooth={true}
            offset={-50}
          >
            HUMAN SPACESHIP
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            to="rideshare"
            onClick={handleClose}
            smooth={true}
            offset={-100}
          >
            RIDESHARE
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="starship" onClick={handleClose} smooth={true} offset={-200}>
            STARLINK
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            SIGNUP{" "}
          </button>
          <button className="px-8 py-3">BUY </button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
