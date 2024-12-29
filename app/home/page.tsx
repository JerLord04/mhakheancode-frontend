"use client";
import "../home/appStyles.css";
import { useEffect, useState } from "react";
import VideoCard from "@/components/videoCard/VideoCard";
import { IoIosLink } from "react-icons/io";
import DocsCard from "@/components/docsCard/DocsCard";
import Navbar from "@/components/navbar/Navbar";
import { FaTags } from "react-icons/fa";
import TagCard from "@/components/tagCard/TagCard";
import MyProfile from "@/components/myProfile/myProfile";
import { AxiosInstance } from "@/utils/AxiosInstance";
import { Post } from "@/types/Post";
import { Response } from "@/types/ResponseType";
import { useRouter } from "next/navigation";

const Home = () => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);

  const router = useRouter();

  useEffect(() => {
    getPostList();
  }, []);

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

  const getPostList = async () => {
    try {
      const response = await AxiosInstance.get<Response<Post[]>>(
        "posts/getPostsList"
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

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-900 overflow-y-auto">
      <div className="fixed top-0 left-0 w-full z-50  text-white">
        <Navbar />
      </div>
      <div className="flex flex-row pt-32 bg-blue-950 h-[320px] w-screen">
        <div className="mx-auto w-[900px]">
          <div className=" flex flex-row flex-wrap items-center">
            <div className="w-1/2">
              <div className="flex flex-col flex-wrap w-full ">
                <div className="text-5xl font-bold text-white">
                  mhakheancode.
                </div>
                <div className="text-2xl mt-5 text-white">
                  Documents and Wiki for thai people.
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-row-reverse">
                <img
                  src="/images/pug-dev.png"
                  width={170}
                  height={200}
                  style={{
                    borderRadius: 100,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-body">
        <div className="flex flex-col mt-10 pb-10">
          <div className="flex flex-row items-center hover:underline hover:text-red-700 cursor-pointer w-auto bg-gray-800  p-1 border border-gray-900 rounded-t-sm text-white">
            <div className="text-lg font-bold">Youtube</div>
            <IoIosLink className="ml-2" />
          </div>
          <div className="flex flex-col justify-center text-white">
            <div className="grid grid-cols-4 gap-1 bg-gray-800 w-full p-1 border border-gray-900 rounded-b-sm">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <VideoCard
                  key={index}
                  src="/images/87568845_1126627934354046_1928070983076282368_n.jpg"
                  alt="image"
                  title="วิธีเป็นคนหล่อโดยไม่ต้องพยายาม"
                  date="01/01/2024"
                />
              ))}
              <a
                href="https://www.youtube.com/@jirapatchookleeb6358"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <div className="mt-6 cursor-pointer hover:underline hover:text-red-700">{`ดูวิดีโอทั้งหมด >`}</div>
              </a>
            </div>
          </div>
          <hr className="border-t-1 border-gray-200 my-1 w-full mt-10" />
          <div className="flex flex-col mt-10 pb-10">
            <div className="flex flex-row items-center hover:underline hover:text-red-700 cursor-pointer w-auto bg-gray-800  p-1 border border-gray-900 rounded-t-sm text-white">
              <div className="text-lg font-bold">Post</div>
              <IoIosLink className="ml-2" />
            </div>
            <div className="flex flex-col justify-center text-white">
              <div className="grid grid-cols-1 gap-5 bg-gray-800 w-full p-3 border border-gray-900 rounded-b-sm">
                {posts.map((item, index) => (
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
                <div className="mt-6 cursor-pointer hover:underline hover:text-red-700">{`ดูบทความทั้งหมด >`}</div>
              </div>
            </div>
          </div>
          <hr className="border-t-1 border-gray-200 my-1 w-full" />
          <div className="flex flex-col mt-10 pb-10">
            <div className="flex flex-row items-center hover:underline hover:text-red-700 cursor-pointer w-auto bg-gray-800  p-1 border border-gray-900 rounded-t-sm text-white">
              <div className="text-lg font-bold">Documents</div>
              <IoIosLink className="ml-2" />
            </div>
            <div className="flex flex-col justify-center text-white">
              <div className="grid grid-cols-1 gap-2 bg-gray-800 w-full p-2 border border-gray-900 rounded-b-sm">
                <div className="mt-6 cursor-pointer hover:underline hover:text-red-700">{`ดูคอร์สทั้งหมด >`}</div>
              </div>
            </div>
          </div>
          <hr className="border-t-1 border-gray-200 my-1 w-full" />
          <div className="flex flex-col mt-10 pb-10">
            <div className="flex flex-row items-center hover:underline hover:text-red-700 cursor-pointer w-auto bg-gray-800  p-1 border border-gray-900 rounded-t-sm text-white">
              <div className="text-lg font-bold">Tag</div>
              <FaTags className="ml-2" />
            </div>
            <div className="flex flex-col justify-center text-white">
              <div className="grid grid-cols-1 gap-2 bg-gray-800 w-full p-2 border border-gray-900 rounded-b-sm">
                <div className="flex flex-row flex-wrap ">
                  {[
                    "JAVA",
                    "PYTHON",
                    "KOTLIN",
                    "C#",
                    "C++",
                    "PHP",
                    "ReactNative",
                    "Golang",
                    "Node.js",
                    "AWS",
                  ].map((item, index) => (
                    <div key={index} className="flex p-3">
                      <TagCard tag={item} />
                    </div>
                  ))}
                </div>

                <div className="mt-6 cursor-pointer hover:underline hover:text-red-700">{`ดูแท็กทั้งหมด >`}</div>
              </div>
            </div>
          </div>
          <MyProfile />
        </div>
      </div>
      <div
        className={`footer-style ${
          scrollDirection == "down" ? "bottom-[0px]" : "bottom-[-48px]"
        }`}
      >
        Copyright © 2024 mhakheancode.
      </div>
    </div>
  );
};

export default Home;
