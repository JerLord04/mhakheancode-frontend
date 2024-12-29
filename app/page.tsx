"use client";
import Navbar from "@/components/navbar/Navbar";
import "../app/appStyles.css";
import CommondButton from "@/components/commondButton/CommondButton";
import { IoDocumentsOutline } from "react-icons/io5";
import { SiWpexplorer } from "react-icons/si";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/home");
  };
  return (
    <div className="flex flex-col flex-wrap bg-blue-950  w-screen h-screen">
      <div className="fixed top-0 left-0 w-full z-50  text-white">
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center h-full w-[1000px] mx-auto">
        <div className="text-7xl font-bold text-white">mhakheancode.</div>
        <div className="flex flex-row mt-5">
          <div>
            <CommondButton
              width={150}
              height={50}
              icon={<IoDocumentsOutline color="black" size={20} />}
              titel={"Documents"}
              activity={function (): void {
                throw new Error("Function not implemented.");
              }}
              color={"#ffffff"}
              hoverColor={"#ffffff"}
              borderColor={"#000000"}
              fontColor="black"
            />
          </div>
          <div className="ml-5">
            <CommondButton
              width={150}
              height={50}
              icon={<SiWpexplorer color="white" size={20} />}
              titel={"Home"}
              activity={handleNavigation}
              color={"#ff00cc"}
              hoverColor={"#ff00cc"}
              borderColor={"#000000"}
              fontColor="white"
            />
          </div>
        </div>

        <div className="fixed bottom-10">
          <div className="flex flex-col flex wrap justify-center items-center">
          <div className="text-3xl  text-white">
            {`“Code is like humor. When you have to explain it, it’s bad.”`}
          </div>

          <div className="text-1xl  text-white">{`by Cory House`}</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
