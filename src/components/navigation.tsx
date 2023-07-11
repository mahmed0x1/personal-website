import styles from "./navigation.module.css";

import Link from "next/link";

interface NavigationProps {
  active: string;
}
// FC stands for functional component
const Navigation: React.FC<NavigationProps> = ({ active }) => {
  return (
    <>
      <div id="navigation-toggle" className={styles.toggle}>
        <i className="fa-solid fa-angle-right"></i>
      </div>
      <aside
        className={`animate__animated animate__fadeInLeft ${styles.aside} `}
      >
        <header></header>
        <nav className={styles.navbar}>
          <ul>
            <li className={active === "home" ? styles.navbar_active : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={active === "blog" ? styles.navbar_active : ""}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={active === "portfolio" ? styles.navbar_active : ""}>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
        <footer>
          <a href="mailto:mahmed0x1@gmail.com">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </footer>
      </aside>
    </>
  );
};

export default Navigation;
