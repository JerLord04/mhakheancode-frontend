"use client";

import React from "react";
import "../videoCard/VideoCardStyles.css";

interface VideoCardProps {
  src: string;
  alt: string;
  title: string;
  date: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, alt, title,date }) => {
  return (
    <div className="flex flex-col w-[190px] h-[200px] rounded-md shadow-sm cursor-pointer mt-3">
      <img src={src} alt="Example" className="w-full h-1/2 object-cover rounded-t-lg" />
      <div className="p-2 bg-slate-950 h-full text-md">{title}</div>
      <div className="bg-slate-950  text-sm font-light pl-2 rounded-b-lg">{date}</div>
    </div>
  );
};

export default VideoCard;
