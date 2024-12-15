import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";

import "./postStyles.css";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import Navbar from "@/components/navbar/Navbar";
import { IoIosEye, IoIosLink } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import TagCard from "@/components/tagCard/TagCard";
import { FaShareSquare } from "react-icons/fa";
import DocsCard from "@/components/docsCard/DocsCard";
import MyProfile from "@/components/myProfile/myProfile";

interface PostData {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}

// Define the path to the posts directory
const postsDirectory = path.join(process.cwd(), "blog");

// Fetch metadata for dynamic routing
export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ""), // Remove .md extension
  }));
}

async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify);

  const file = await processor.process(fileContents);
  const contentHtml = file.toString();

  console.log(contentHtml);

  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as PostData;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = await getPostData(params.id);
  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-900 overflow-y-auto">
      <div className="fixed top-0 left-0 w-full z-50  text-white">
        <Navbar />
      </div>
      <div className="w-[900px] h-auto mx-auto pt-32 ">
        <div className="text-white font-bold text-3xl">
          การเป็นคนหล่อโดยไม่ต้องพยายาม
        </div>
        <div className="flex flex-row flex-wrap mt-10 ">
          <div className="flex flex-row w-1/2">
            <img
              src="/images/pug-dev.png"
              width={100}
              height={200}
              style={{
                borderRadius: 100,
              }}
            />
            <div className="flex flex-col-reverse ml-5 justify-center w-1/2">
              <div className="text-white">12 min read</div>
              <div className="text-white">date: {"04/03/2024"}</div>
              <div className="text-white font-bold text-lg">mhakheancode</div>
            </div>
          </div>

          <div className="flex flex-row-reverse w-1/2 items-center cursor-pointer">
            <div className="flex flex-col flex-wrap">
              <div className="flex flex-row">
                <div className="flex flex-row items-center">
                  <IoIosEye size={20} color="white" />
                  <div className="text-white ml-2">12.3K</div>
                </div>
                <div className="flex flex-row items-center ml-2">
                  <AiFillLike size={20} color="white" />
                  <div className="text-white ml-2">10K</div>
                </div>
                <div className="flex flex-row items-center ml-2">
                  <FaComment size={20} color="white" />
                  <div className="text-white ml-2">3</div>
                </div>
              </div>
              <div className="flex flex-row text-white font-bold mt-5  hover:underline">
                <div>Share this post</div>
                <FaShareSquare className="ml-3" size={20} color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 border p-2">
          <div className="flex flex-row items-center">
            <div className="text-white text-lg font-bold">Tag</div>
            <FaTags size={20} color="white" className="ml-2" />
          </div>
          <div className="flex flex-row flex-wrap">
            {["JAVA"].map((item, index) => (
              <div key={index} className="flex p-3 text-white">
                <TagCard tag={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <article className={`markdown-body`}>
        <div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </article>
      <hr className="border-t-1 border-gray-200 my-1  w-[900px] mx-auto" />
      <div className="w-[900px] h-auto mx-auto">
        <div className="flex flex-col mt-10 pb-10">
          <div className="flex flex-row items-center hover:underline hover:text-red-700 cursor-pointer w-auto bg-gray-800  p-1 border border-gray-900 rounded-t-sm text-white">
            <div className="text-lg font-bold">Other Post</div>
            <IoIosLink className="ml-2" />
          </div>
          <div className="flex flex-col justify-center text-white">
            <div className="grid grid-cols-1 gap-5 bg-gray-800 w-full p-3 border border-gray-900 rounded-b-sm">
              {[1, 2, 3].map((item, index) => (
                <div key={index}>
                  <DocsCard
                    src="/images/87568845_1126627934354046_1928070983076282368_n.jpg"
                    title="วิธีเป็นคนหล่อโดยไม่ต้องพยายาม"
                    date="01/02/2024"
                    tag="Java"
                    writer="mhakheankode."
                    view="12.3K"
                    like="10k"
                  />
                </div>
              ))}
              <div className="mt-6 cursor-pointer hover:underline hover:text-red-700">{`ดูบทความทั้งหมด >`}</div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-gray-200 my-1  w-[900px] mx-auto" />
      <div className="w-[900px] mx-auto">
        <MyProfile />
      </div>
    </div>
  );
}
