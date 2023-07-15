"use client";

import styles from "./blogCard.module.css";

import Link from "next/link";

interface NavigationProps {
  title: string;
}
// FC stands for functional component
const BlogCard: React.FC<NavigationProps> = ({ title }) => {
  return (
    <Link className={styles.card} href="/">
      <img src="/images/article1.jpg" alt="Article" />
      <h1>{title}</h1>
      <div className={styles.categories}>
        <div className={styles.category}>JavaScript</div>
        <div className={styles.category}>Mobile Development</div>
      </div>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
    </Link>
  );
};

export default BlogCard;
