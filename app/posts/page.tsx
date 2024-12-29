"use client";
import { useEffect, useState } from "react";
import "../posts/styles.css";
import Paginations from "@/components/pagination/Pagination";
import Navbar from "@/components/navbar/Navbar";
import DocsCard from "@/components/docsCard/DocsCard";
import { IoIosLink } from "react-icons/io";
import { Post } from "@/types/Post";
import { AxiosInstance } from "@/utils/AxiosInstance";
import { Response } from "@/types/ResponseType";

const Posts = () => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(5);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
    };
  }, [lastScrollY]);

  useEffect(() => {
    const getPostList = async () => {
      try {
        const response = await AxiosInstance.get<Response<Post[]>>(
          "posts/getAllPosts"
        );
        console.log("response => ", response.data);
        if (response.data.status) {
          setPosts(response.data.paylaod);
        } else {
          console.error("Error fetching posts:", response.data.paylaod);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    getPostList();
  }, []);

  const renderPosts = () => {
    const indexOfLastTodo = currentPage * postsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstTodo, indexOfLastTodo);

    return (
      <div className="grid grid-cols-1 gap-5 bg-gray-800 w-full p-3 border border-gray-900 rounded-b-sm">
        {currentPosts.map((item, index) => (
          <div key={index}>
            <DocsCard
              id={item.id}
              src="/images/87568845_1126627934354046_1928070983076282368_n.jpg"
              title={item.topics_name}
              date={item.created_at.toString()}
              tag={item.tag}
              writer="mhakheankode."
              view="12.3K"
              like="10k"
              htmlTag={item.md_html_text}
              minRead={item.min_read}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderPageNumber = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex flex-row justify-end cursor-pointer mt-2">
        {pageNumbers.map((number) => (
          <div className="flex justify-center items-center bg-black mr-2 w-7 h-7" onClick={() => {setCurrentPage(number)}}>
            {number}
          </div>

        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-900 overflow-y-auto">
      <div className="fixed top-0 left-0 w-full z-50  text-white">
        <Navbar />
      </div>
      {/* <div className="mobile-body pt-10"> */}
        <div className="flex flex-col mt-10 pb-16  flex-wrap h-auto pt-10 w-[900px] mx-auto">
          <div className="flex flex-row items-center hover:underline hover:text-red-700 cursor-pointer w-auto bg-gray-800  p-1 border border-gray-900 rounded-t-sm text-white">
            <div className="text-lg font-bold">Post</div>
            <IoIosLink className="ml-2" />
          </div>
          <div className="flex flex-col justify-center text-white">
            {renderPosts()}
          </div>
          <div>{renderPageNumber()}</div>
        </div>
      {/* </div> */}
      <div
        className={`footer-style bottom-[0px]`}
      >
        Copyright © 2024 mhakheancode.
      </div>
    </div>
  );
};

export default Posts;
