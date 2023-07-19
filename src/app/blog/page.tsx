import { v4 as uuidv4 } from "uuid";
import { getAllPosts } from "@/lib/posts";
import Navigation from "@/components/navigation";
import BlogCard from "@/components/blogCard";
import Pagination from "@/components/Pagination";

import styles from "./page.module.css";

const POSTS_PER_PAGE = 6;

export default async function Blog({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams.page) || 1;
  const posts = await getAllPosts();
  return (
    <div className={styles.root}>
      <Navigation active="blog" />
      <div className={`animate__animated animate__fadeIn ${styles.main}`}>
        <h1>Latest Blog Articles</h1>
        <div className={styles.blogCards}>
          {posts
            .slice(
              (page - 1) * POSTS_PER_PAGE,
              (page - 1) * POSTS_PER_PAGE + POSTS_PER_PAGE
            )
            .map((post) => (
              <BlogCard
                key={uuidv4()}
                title={post.title}
                date={post.date}
                categories={post.categories}
                cover={post.cover}
                description={post.description}
                slug={post.slug}
              />
            ))}
        </div>
        <Pagination
          page={page}
          count={Math.ceil(posts.length / POSTS_PER_PAGE)}
        />
      </div>
    </div>
  );
}
