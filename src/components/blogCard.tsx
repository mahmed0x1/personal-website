import styles from "./blogCard.module.css";

import Image from "next/image";

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
  categories,
  description,
}) => {
  return (
    <a className={styles.card} href={`/blog/${slug}`}>
      <img src={cover} alt="Article Cover" />
      <h1>{title}</h1>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category}>
            {category}
          </div>
        ))}
      </div>
      <p className={styles.description}>{description}</p>
    </a>
  );
};

export default BlogCard;
