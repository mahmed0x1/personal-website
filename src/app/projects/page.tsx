import Navigation from "@/components/navigation";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <Navigation active="projects" />
      <div className={styles.main}>
        <h1>projects</h1>
      </div>
    </div>
  );
}
