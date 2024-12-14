"use client";

import React, { useState } from "react";
import "../videoCard/VideoCardStyles.css";

// import { FaPlay } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";

interface VideoCardProps {
  src: string;
  alt: string;
  title: string;
  date: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, alt, title, date }) => {
  const [showPlayIcon, setShowPlayIcon] = useState<boolean>(false);

  const setMouseHoverCard = () => {
    setShowPlayIcon(true);
  };

  const setMouseLeaveCard = () => {
    setShowPlayIcon(false);
  };

  return (
    <div onMouseEnter={setMouseHoverCard} onMouseLeave={setMouseLeaveCard} className="card-body">
      <div className="card-section-1">
        <img src={src} alt={alt} className="w-full h-full rounded-t-md" />
        <IoMdPlay className={`absolute top-10 left-20 transition-all duration-300 ease-in-out ${showPlayIcon ? "block" : "hidden"}`} size={30} />
      </div>
      <div className="pl-2 pt-2">{title}</div>
      <div className="pl-1">{date}</div>
    </div>
  );
};

export default VideoCard;
