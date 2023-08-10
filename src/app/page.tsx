import Navigation from "@/components/navigation";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <Navigation active="home" />
      <div
        className={`animate__animated animate__slow animate__fadeInUp ${styles.main}`}
      >
        <span className={styles.greeting}>Hello There!</span>
        <h1 className={styles.name}>
          I&apos;m <span>Mohammed Ahmed</span>.
        </h1>
        <p className={styles.introduction}>
          I am an ambitious software developer with a strong passion for coding.
          My interests include: <span>Web Development</span>{" "}
          <span>Mobile Applications</span> <span>UI/UX</span>{" "}
          <span>Competitive Programming</span> <span>Game Design</span>{" "}
          <span>Artifical Intelligence</span> and much more! Check up my resume
          and kindly contact me if you have any opportunities :&rpar;
        </p>
      </div>
    </div>
  );
}
