"use client";
import React, { ReactNode, useState } from "react";
import "../../components/dropdown/DropDownStyles.css";

interface DropDownProps {
  trigger: ReactNode;
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDown: React.FC<DropDownProps> = ({ trigger, children,isOpen ,setIsOpen}) => {


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="drop-down">
      <div className="trigger-icon" onClick={toggleDropdown}>{trigger}</div>
      <div className={`drop-down-content ${isOpen ? 'block' : 'hidden'}`}>{children}</div> 
    </div>
  );
};

export default DropDown;
