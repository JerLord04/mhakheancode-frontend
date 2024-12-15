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
        <div className="text-white">การเป็นคนหล่อโดยไม่ต้องพยายาม</div>
      </div>
      <article className={`markdown-body pt-10`}>
        <div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </article>
    </div>
  );
}
