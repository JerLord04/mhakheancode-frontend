"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiYoutubekids } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";

import "../../components/navbar/NavbarStyle.css";
import DropDown from "../dropdown/DropDown";
import SearchInput from "../searchInput/SearchInput";

const Navbar = () => {
  const [moonColorFlg, setMoonColorFlg] = useState(true);
  const [text, setText] = useState<string>("");
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <div className="nav-body">
      <div className="content">
        <div className="my-logo text-lg font-bold">mhakheancode.</div>
        <div className="flex justify-end items-center xs:hidden">
          <div className="flex flex-row justify-center items-center">
            <DropDown
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              trigger={<SearchInput text={text} setText={setText} />}
            >
              <div className="flex flex-col pl-1 pr-1 ">
                <div className="flex flex-row items-center">
                  <div className="basis-1/2 text-black font-bold">Topic</div>
                  <div className="basis-1/2">
                    <div
                      className="flex flex-row justify-end "
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <FaWindowClose
                        className="icon-contact"
                        size={"20"}
                        color="red"
                      />
                    </div>
                  </div>
                </div>
                <hr className="border-t-1 border-gray-200 my-1 w-full" />
                <div className="text-black">No data.</div>
              </div>
            </DropDown>
            <a
              href="https://github.com/JerLord04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon-contact" size={"20"} color="white" />
            </a>
            <a
              href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon-contact" size={"20"} color="white" />
            </a>

            <MdEmail className="icon-contact" size={"20"} color="white" />
            <a
              href="https://www.youtube.com/@jirapatchookleeb6358"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiYoutubekids
                className="icon-contact"
                size={"20"}
                color="white"
              />
            </a>
          </div>
          <div
            onMouseEnter={iconMoonMouseHover}
            onMouseLeave={iconMoonMouseLeave}
            onClick={() => {
              console.log("wait function");
            }}
          >
            {/* {moonColorFlg ? (
              <FaRegMoon className="ml-5 xs:hidden" size={"20"} color="white" />
            ) : (
              <FaMoon className="ml-5 xs:hidden" size={"20"} color="white" />
            )} */}
          </div>
        </div>

        <div className="icon-menu" onClick={pressOpenMenu}>
          <AiOutlineMenu size={"20"} color="white" />
        </div>
      </div>
      <div
        className={`sliderMemu ${
          openSideMenu ? "left-[-70%]" : "left-[0px]"
        } z-[51]`}
      >
        <div className="flex flex-col p-2  h-[100%]">
          <div className="">
            <SearchInput text={text} setText={setText} />
          </div>
          <div className="mt-2 text-black h-3/4 border rounded overflow-y-auto">
            No data...
          </div>
          <div className="mt-2 text-black flex flex-row">
            <a
              href="https://github.com/JerLord04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row"
            >
              <FaGithub className="icon-contact" size={"20"} color="black" />
              <div>GitHub.com</div>
            </a>
          </div>
          <div className="mt-2 text-black flex flex-row">
            <a
              href="https://github.com/JerLord04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row"
            >
              <FaLinkedin className="icon-contact" size={"20"} color="#0a66c2" />
              <div>LinkIn</div>
            </a>
          </div>
          <div className="mt-2 text-black flex flex-row">
            <a
              href="https://www.youtube.com/@jirapatchookleeb6358"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row"
            >
              <SiYoutubekids
                className="icon-contact"
                size={"20"}
                color="red"
              />
              <div>Youtube.com</div>
            </a>
          </div>
        </div>
      </div>
      {openSideMenu ? null : (
        <div
          onClick={() => {
            if (!openSideMenu) {
              dispressOpenMenu();
            }
          }}
          className="fixed top-0 left-0 w-screen h-screen bg-black shadow-lg z-50 opacity-70"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
