"use client";
import React from "react";
import TagCard from "../tagCard/TagCard";
import { IoIosEye } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";

interface DocsCardProps {
  title: string;
  date: string;
  tag: string;
  src: string;
  writer: string;
  view: string;
  like: string;
}

const DocsCard: React.FC<DocsCardProps> = ({
  title,
  date,
  tag,
  src,
  writer,
  view,
  like,
}) => {
  return (
    <div className="flex flex-row h-40 rounded-lg border shadow-md hover:bg-slate-900 transition-all duration-300 ease-in-out">
      <div className="basis-1/4">
        <img src={src} className="w-full h-full rounded-l-lg" />
      </div>
      <div className="basis-3/4">
        <div className="flex flex-col">
          <div className="flex flex-rol p-2 items-center">
            <div>
              <TagCard tag="JAVA" />
            </div>
            <div className="ml-2 flex flex-row">
              <div className="font-bold">{"Writer:"}</div>
              <div className="ml-1">{writer}</div>
            </div>
            <div className="basis-1/2">
              <div className="flex flex-row justify-end items-center">
                <IoIosEye />
                <div className="ml-2">{view}</div>
                <AiFillLike className="ml-4" />
                <div className="ml-2">{like}</div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="font-bold">{title}</div>
            <div className="w-14 cursor-pointer hover:underline hover:text-red-500 ">
              อ่านต่อ
            </div>
          </div>
          <div className="p-2 flex flex-row">
            <div className="text-white font-bold">{date}</div>
            <div className="ml-3"> 12 min read</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsCard;
