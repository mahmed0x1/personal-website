"use client";

import Slider from "react-slick";

import Navigation from "@/components/navigation";

import styles from "./page.module.css";
import "node_modules/slick-carousel/slick/slick.css";
import "node_modules/slick-carousel/slick/slick-theme.css";

interface NavigationProps {}

const Projects: React.FC<NavigationProps> = ({}) => {
  const settings = {
    dots: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.root}>
      <Navigation active="projects" />
      <div className={styles.main}>
        <div className={styles.header}>
          <h1>Portfolio</h1>
          <img src="/images/paint.png" />
        </div>
        <div className={styles.projects}>
          <div className={styles.project}>
            <div className={styles.gallery}>
              <Slider {...settings}>
                <img src="/projects/1.png" />

                <img src="/projects/2.png" />
              </Slider>
            </div>
            <div className={styles.description}>
              <h2>ChatApp</h2>
              <p>This is a sample chat app that i made using react native</p>
              <div>
                <span>React Native</span>
                <span>Redux</span>
              </div>
              <div>
                <a>
                  View Code <i className="fa-brands fa-github-alt"></i>
                </a>
                <a>
                  Live Demo <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
