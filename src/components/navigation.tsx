import styles from "./navigation.module.css";

import Link from "next/link";

interface NavigationProps {
  active: string;
}
// FC stands for functional component
const Navigation: React.FC<NavigationProps> = ({ active }) => {
  return (
    <aside className={`animate__animated animate__fadeInLeft ${styles.aside} `}>
      <header></header>
      <nav className={styles.navbar}>
        <ul>
          <li className={active === "home" ? styles.navbar_active : ""}>
            <Link href="/">
              <i className="fa-solid fa-house"></i>Home
            </Link>
          </li>
          <li className={active === "blog" ? styles.navbar_active : ""}>
            <Link href="/blog">
              <i className="fa-solid fa-book"></i>Blog
            </Link>
          </li>
          <li className={active === "projects" ? styles.navbar_active : ""}>
            <Link href="/projects">
              <i className="fa-solid fa-code"></i>Projects
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <i className="fa-regular fa-file-lines"></i>Resume
            </Link>
          </li>
        </ul>
      </nav>
      <footer>
        <a href="mailto:mahmed0x1@gmail.com">
          <i className="fa-regular fa-envelope"></i>
          Contact
        </a>
      </footer>
    </aside>
  );
};

export default Navigation;
