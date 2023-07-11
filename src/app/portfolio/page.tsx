import Navigation from "@/components/navigation";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <Navigation active="portfolio" />
      <div className={styles.main}>
        <h1>Portfolio</h1>
      </div>
    </div>
  );
}
