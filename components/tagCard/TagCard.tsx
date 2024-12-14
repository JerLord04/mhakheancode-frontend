"use client";
import React from "react";
import { FaTags } from "react-icons/fa";
import '../tagCard/TagCardStyles.css'

interface TagCardProps {
  tag: string;
}

const TagCard: React.FC<TagCardProps> = ({ tag }) => {
  return (
    <div className="tag-body">
      <FaTags className="ml-2"/>
      <div className="ml-2 text-sm font-bold">{tag}</div>
    </div>
  );
};

export default TagCard;
