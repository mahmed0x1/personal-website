"use client";

import Navigation from "@/components/navigation";
import BlogCard from "@/components/blogCard";

import Pagination from "@mui/material/Pagination";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <Navigation active="blog" />
      <div className={`animate__animated animate__fadeIn ${styles.main}`}>
        <h1>Latest Blog Updates</h1>
        <div className={styles.blogCards}>
          <BlogCard title="How to code Mobile Apps Using JavaScript" />
          <BlogCard title="How to code Mobile Apps Using JavaScript" />
          <BlogCard title="How to code Mobile Apps Using JavaScript" />
          <BlogCard title="How to code Mobile Apps Using JavaScript" />
          <BlogCard title="How to code Mobile Apps Using JavaScript" />
          <BlogCard title="How to code Mobile Apps Using JavaScript" />
          <BlogCard title="How to code Mobile Apps Using JavaScript" />
          <BlogCard title="How to code Mobile Apps Using JavaScript" />
          <BlogCard title="How to code Mobile Apps Using JavaScript" />
          <BlogCard title="How to code Mobile Apps Using JavaScript" />
          <BlogCard title="How to code Mobile Apps Using JavaScript" />
          <BlogCard title="How to code Mobile Apps Using JavaScript" />
        </div>
        <Pagination
          className={styles.pagination}
          count={3}
          page={1}
          onChange={(event, pageNum) => {
            console.log(pageNum);
          }}
          color="primary"
        />
      </div>
    </div>
  );
}
