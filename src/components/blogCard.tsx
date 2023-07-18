"use client";

import styles from "./blogCard.module.css";
import { v4 as uuidv4 } from "uuid";

import Link from "next/link";

interface NavigationProps {
  title: string;
  date: Date;
  categories: string[];
  description: string;
  cover: string;
  slug: string;
  key: string;
}
// FC stands for functional component
const BlogCard: React.FC<NavigationProps> = ({
  title,
  cover,
  date,
  slug,
  key,
  categories,
  description,
}) => {
  return (
    <a className={styles.card} href={`/blog/${slug}`}>
      <img src={cover} alt="Article Cover" />
      <h1>{title}</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div key={uuidv4()} className={styles.category}>
            {category}
          </div>
        ))}
      </div>
      <p className={styles.description}>{description}</p>
    </a>
  );
};

export default BlogCard;
