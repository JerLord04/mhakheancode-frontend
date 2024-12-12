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

  const iconMoonMouseHover = () => {
    setMoonColorFlg(false);
  };

  const iconMoonMouseLeave = () => {
    setMoonColorFlg(true);
  };

  return (
    <div className="nav-body">
      <div className="content">
        <div className="my-logo">mhakheancode.</div>
        <div className="flex justify-end items-center xs:hidden">
          <div className="flex flex-row ">
            <FaGithub className="icon-contact " size={"20"} color="black" />
            <FaLinkedin className="icon-contact" size={"20"} color="black" />
            <MdEmail className="icon-contact" size={"20"} color="black" />
            <SiYoutubekids className="icon-contact" size={"20"} color="black" />
          </div>
          <div
            onMouseEnter={iconMoonMouseHover}
            onMouseLeave={iconMoonMouseLeave}
            onClick={() => {
              console.log("wait function");
            }}
          >
            {moonColorFlg ? (
              <FaRegMoon className="ml-5 xs:hidden" size={"20"} color="black" />
            ) : (
              <FaMoon className="ml-5 xs:hidden" size={"20"} color="black" />
            )}
          </div>
        </div>
        <div className="icon-menu">
          <AiOutlineMenu size={"20"} color="black" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
