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
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [moonColorFlg, setMoonColorFlg] = useState(true);
  const [text, setText] = useState<string>("");
  const [openSideMenu, setOpenSideMenu] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

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

  const handleNavigation = () => {
    router.push("/home");
  };

  const handleNavigationPosts = () => {
    router.push("/posts");
  };

  return (
    <div className="nav-body">
      <div className="content">
        <div className="flex flex-row items-center basis-1/2">
          <div className="my-logo text-lg font-bold cursor-pointer" onClick={handleNavigation}>
            mhakheancode.
          </div>{" "}
          <div className="my-logo ml-8 cursor-pointer hover:text-red-500" onClick={handleNavigationPosts}>
            Posts
          </div>
          <div className="my-logo ml-5 cursor-pointer hover:text-red-500">
            Document
          </div>
        </div>
        <div className="basis-1/2 flex flex-row-reverse items-center ">
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
            <SiYoutubekids className="icon-contact" size={"20"} color="white" />
          </a>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
