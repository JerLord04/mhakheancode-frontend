"use client";

import React from "react";

interface PaginationsProps {
  itemPerPage: number;
  totalItem: number;
}

const Paginations: React.FC<PaginationsProps> = ({
  itemPerPage,
  totalItem,
}) => {
  const calCulatePagination = () => {
    return <div className="text-white"> Test</div>;
  };

  return <div>{calCulatePagination()}</div>;
};

export default Paginations;
