"use client";
import Navbar from "@/components/navbar/Navbar";
import "../app/appStyles.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaFileAlt } from "react-icons/fa";
import VideoCard from "@/components/videoCard/VideoCard";
import { IoIosLink } from "react-icons/io";

const Home = () => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <div className="flex flex-col w-screen h-auto bg-white ">
      <div className="fixed top-0 left-0 w-full z-50  text-white">
        <Navbar />
      </div>
      <div className="mobile-body">
        <div className="flex flex-row border-b-2 pb-10 border-sky-950 justify-center">
          <div className="flex flex-col pt-8">
            <img
              src="/images/87568845_1126627934354046_1928070983076282368_n.jpg"
              alt="Example"
              className="w-full h-auto object-cover  "
            />
            <div className="bg-blue-950 rounded-b-lg p-2 shadow-sm">
              <div className="text-md font-bold">Mr.Jirapat Chookleeb</div>
              <div className="text-md">SE At Protoss Tech.</div>
              <div className="text-sm">
                Full-Stack,Kotlin ,React , React Native,Next.js...
              </div>
            </div>
          </div>

          <div className="flex flex-col p-8">
            <div className="text-lg font-bold">
              สวัสดีครับ ผมชื่อน้องปอม ผู้ก่อตั้ง mhakheancode
            </div>
            ========================================================
            <p>
              ด้วยจุดประสงค์ ที่อยากลองทำเว็บบล็อกส่วนตัว เพื่อใช้ในการเก็บ
              Documents
            </p>
            <div>
              ที่เกี่ยวข้องกับการ Development Software หรือ สิ่งต่าง ๆ เกี่ยวกับ
              Information
            </div>
            <div>
              Technology และอื่น ๆ แต่จะให้เก็บไว้งานคนเดียวก็กลัวเหงา
              เลยอยากแบ่งให้น้อง ๆ มหาลัยหรือเพื่อนชาวแก๊ง Dev ได้อ่านกันครับ
            </div>
            <div className="mt-10">
              {`"หวังว่า Blog ของผมคงมีประโยชน์ต่อการทำงาน ทำโปรเจกต์ของทุกท่าน"`}
            </div>
            <div className="">
              {`ปล.เว็บยังไม่ Responsive อย่าเพิ่ง Inspect ดูอะไรนะจีะ`}
            </div>
            <div className="flex flex-row cursor-pointer mt-3  items-center hover:underline hover:text-red-700">
              <FaFileAlt />
              <div className="ml-2">{`สามารถดู Resume ได้ที่ลิงก์นี้ครับ <<<`}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div className="flex flex-row items-center hover:underline hover:text-red-700 cursor-pointer w-auto bg-gray-800  p-1 border border-gray-900 rounded-t-sm">
            <div className="text-lg font-bold">Youtube</div>

            <IoIosLink className="ml-2" />
          </div>
          <div className="flex flex-col justify-center ">
            <div className="grid grid-cols-4 gap-1 bg-gray-800 w-full p-1 border border-gray-900 rounded-b-sm">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <VideoCard
                  src="/images/87568845_1126627934354046_1928070983076282368_n.jpg"
                  alt="image"
                  title="วิธีเป็นคนหล่อโดยไม่ต้องพยายาม"
                  date="01/01/2024"
                />
              ))}
              <div className="mt-6 cursor-pointer hover:underline hover:text-red-700">{`ดูวิดีโอทั้งหมด >`}</div>
            </div>
          </div>
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
