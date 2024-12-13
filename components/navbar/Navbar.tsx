"use client";
import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiYoutubekids } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";

import "../../components/navbar/NavbarStyle.css";

const Navbar = () => {
  const [moonColorFlg, setMoonColorFlg] = useState(true);
  const [openSideMenu, setOpenSideMenu] = useState(true);

  const iconMoonMouseHover = () => {
    setMoonColorFlg(false);
  };

  const iconMoonMouseLeave = () => {
    setMoonColorFlg(true);
  };

  const pressOpenMenu = () => {
    setOpenSideMenu(false);
  };

  const dispressOpenMenu = () => {
    setOpenSideMenu(true);
  };

  return (
    <div
      className="nav-body"
      onClick={() => {
        if (!openSideMenu) {
          dispressOpenMenu();
        }
      }}
    >
      <div className="content">
        <div className="my-logo">mhakheancode.</div>
        <div className="flex justify-end items-center xs:hidden">
          <div className="flex flex-row ">
            <FaGithub className="icon-contact " size={"20"} color="white" />
            <FaLinkedin className="icon-contact" size={"20"} color="white" />
            <MdEmail className="icon-contact" size={"20"} color="white" />
            <SiYoutubekids className="icon-contact" size={"20"} color="white" />
          </div>
          <div
            onMouseEnter={iconMoonMouseHover}
            onMouseLeave={iconMoonMouseLeave}
            onClick={() => {
              console.log("wait function");
            }}
          >
            {moonColorFlg ? (
              <FaRegMoon className="ml-5 xs:hidden" size={"20"} color="white" />
            ) : (
              <FaMoon className="ml-5 xs:hidden" size={"20"} color="white" />
            )}
          </div>
        </div>

        <div className="icon-menu" onClick={pressOpenMenu}>
          <AiOutlineMenu size={"20"} color="white" />
        </div>
      </div>
      <div
        className={`sliderMemu ${
          openSideMenu ? "left-[-300px]" : "left-[0px]"
        } `}
      >
        Slider menu
      </div>
    </div>
  );
};

export default Navbar;
