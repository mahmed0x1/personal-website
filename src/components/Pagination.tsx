"use client";

import styles from "./pagination.module.css";

import Link from "next/link";

function generateArrayFrom1ToN(n: number): number[] {
  const result: number[] = [];
  for (let i: number = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

interface PaginationProps {
  page: number;
  count: number;
}
// FC stands for functional component
const Pagination: React.FC<PaginationProps> = ({ page, count }) => {
  return (
    <ul className={styles.pagination}>
      <li>
        {page !== 1 ? (
          <Link href={`/blog?page=${page - 1}`}>
            <i className="fa-solid fa-angle-left"></i>
          </Link>
        ) : (
          <i style={{ color: "#aaa" }} className="fa-solid fa-angle-left"></i>
        )}
      </li>
      {generateArrayFrom1ToN(count).map((num) => {
        if (num === page) {
          return (
            <Link
              href={`/blog?page=${num}`}
              key={num}
              className={styles.active_page}
            >
              <li key={num}>{num}</li>
            </Link>
          );
        } else {
          return (
            <Link key={num} href={`/blog?page=${num}`}>
              <li key={num}>{num}</li>
            </Link>
          );
        }
      })}

      <li>
        {page !== Math.ceil(count) ? (
          <Link href={`/blog?page=${page + 1}`}>
            <i className="fa-solid fa-angle-right"></i>
          </Link>
        ) : (
          <i style={{ color: "#aaa" }} className="fa-solid fa-angle-right"></i>
        )}
      </li>
    </ul>
  );
};

export default Pagination;
