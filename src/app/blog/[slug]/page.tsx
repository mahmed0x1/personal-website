import fs from "fs";
import path from "path";
import { GetStaticPaths } from "next";
import matter, { GrayMatterFile } from "gray-matter";
import Script from "next/script";

import moment from "moment";

import { getPostData } from "@/lib/posts";

import Navigation from "@/components/navigation";

import styles from "./page.module.css";

interface PostData {
  id: string;
  title: string;
  date: Date;
  categories: string[];
  contentHtml: string;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const postData: PostData = await getPostData(params.slug);

  return {
    title: postData.title,
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const postData: PostData = await getPostData(params.slug);
  return (
    <div className={`${styles.root}`}>
      <Navigation active="blog" />
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.image_container}>
            <div className={styles.image}></div>
          </div>
          <div className={styles.article_header}>
            <h1>{postData.title}</h1>
          </div>
          <div className={styles.categories}>
            {postData.categories.map((category) => (
              <div className={styles.category}>{category}</div>
            ))}
          </div>
          <article
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          ></article>
          <div className={styles.article_footer}>
            <span>
              Updated On: {moment(postData.date).format("MMM Do YYYY")}
            </span>
          </div>
        </div>
      </div>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js" />
      <Script src="/scripts/highlight.js" strategy="afterInteractive" />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the post metadata section
    const matterResult: GrayMatterFile<string> = matter(fileContents);
    return {
      params: {
        slug: matterResult.data.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
