import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

interface PostData {
  id: string;
  title: string;
  date: Date;
  categories: string[];
  contentHtml: string;
  cover: string;
  description: string;
  slug: string;
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult: GrayMatterFile<string> = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    categories: matterResult.data.categories,
    cover: matterResult.data.cover,
    description: matterResult.data.description,
    slug: matterResult.data.slug,
  };
}

interface PostsData {
  title: string;
  date: Date;
  categories: string[];
  cover: string;
  description: string;
  slug: string;
}

export async function getAllPosts(): Promise<PostsData[]> {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const postsData: PostsData[] = [];

  await Promise.all(
    filenames.map(async (filename) => {
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      // Use gray-matter to parse the post metadata section
      const matterResult: GrayMatterFile<string> = matter(fileContents);
      postsData.push({
        title: matterResult.data.title,
        date: new Date(matterResult.data.date),
        categories: matterResult.data.categories,
        cover: matterResult.data.cover,
        description: matterResult.data.description,
        slug: matterResult.data.slug,
      });
    })
  );

  postsData.sort(
    (a: PostsData, b: PostsData) => b.date.getTime() - a.date.getTime()
  );

  return postsData;
}
