import { v4 as uuidv4 } from "uuid";
import { getAllPosts } from "@/lib/posts";
import Navigation from "@/components/navigation";
import BlogCard from "@/components/blogCard";
import Pagination from "@/components/Pagination";

import styles from "./page.module.css";

const BLOGS_PER_PAGE = 6;

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
      <div
        className={`animate__animated animate__fadeIn ${styles.main}`}
        style={{
          justifyContent: posts.length > 0 ? "flex-start" : "space-between",
        }}
      >
        <h1>Latest Blog Articles</h1>

        {posts.length > 0 ? (
          <div className={styles.blogCards}>
            {posts
              .slice(
                (page - 1) * BLOGS_PER_PAGE,
                (page - 1) * BLOGS_PER_PAGE + BLOGS_PER_PAGE
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
        ) : (
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#ffffff15",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <i
              style={{ fontSize: "2rem", margin: "1rem 0" }}
              className="fa-regular fa-hourglass fa-spin fa-spin-reverse"
            ></i>
            <br />
            Nothing added yet...
          </div>
        )}
        <div></div>
        {posts.length > 0 && (
          <Pagination
            page={page}
            count={Math.ceil(posts.length / BLOGS_PER_PAGE)}
          />
        )}
      </div>
    </div>
  );
}
