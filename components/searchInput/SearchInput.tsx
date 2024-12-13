"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ text, setText }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value); 
  };

  return (
    <div className="search-bar">
      <div className="flex justify-center items-center">
        <FaSearch className="icon-contact " size={"20"} color="#3b82f6" />
      </div>
      <input
        className="text-input ml-2 text-black font-bold"
        placeholder="ค้นหา..."
        value={text}
        onChange={handleChange} // Use the correct handler
      />
    </div>
  );
};

export default SearchInput;
