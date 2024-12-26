"use client";
import React, { useCallback } from "react";
import TagCard from "../tagCard/TagCard";
import { IoIosEye } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import Link from "next/link";

interface DocsCardProps {
  title: string;
  date: string;
  tag: string;
  src: string;
  writer: string;
  view: string;
  like: string;
  id: number;
  htmlTag: string;
}

const DocsCard: React.FC<DocsCardProps> = ({
  title,
  date,
  tag,
  src,
  writer,
  view,
  like,
  id,
  htmlTag
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
              <TagCard tag={tag} />
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
            {/* <div className="w-14 cursor-pointer hover:underline hover:text-red-500 " onClick={() => {handleNavigation()}}>
              อ่านต่อ
            </div> */}
            <Link
              className="w-14 cursor-pointer hover:underline hover:text-red-500"
              href={{
                pathname: `/posts/${id}`,
                query: { html: htmlTag },
              }}
            >
              อ่านต่อ
            </Link>
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
