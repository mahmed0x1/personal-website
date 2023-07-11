import Navigation from "@/components/navigation";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <Navigation active="blog" />
      <div className={styles.main}>
        <h1>Blog</h1>
      </div>
    </div>
  );
}
