import React from "react";
import { FaFileAlt } from "react-icons/fa";

const MyProfile = () => {
  return (
    <div className="flex flex-row  pb-10  justify-center">
      <div className="flex flex-col pt-8">
        <img
          src="/images/87568845_1126627934354046_1928070983076282368_n.jpg"
          alt="Example"
          className="w-full h-auto object-cover  "
        />
        <div className="bg-blue-950 rounded-b-lg p-2 shadow-sm text-white">
          <div className="text-md font-bold">Mr.Jirapat Chookleeb</div>
          <div className="text-md">SE At Protoss Tech.</div>
          <div className="text-sm">
            Full-Stack,Kotlin ,React , React Native,Next.js...
          </div>
        </div>
      </div>

      <div className="flex flex-col p-8 text-white">
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
  );
};

export default MyProfile;
