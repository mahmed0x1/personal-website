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
        <div className={styles.projects}>
          <ul className={styles.projects_list}>
            <li>My Projects:</li>
            <li>Project 1</li>
            <li className={styles.active}>ChatApp</li>
            <li>Project 3</li>
            <li>Project 4</li>
          </ul>
          <div className={styles.project}>
            <h2>ChatApp</h2>
            <div className={styles.gallery}>
              <Slider {...settings}>
                <img src="/projects/1.png" />

                <img src="/projects/2.png" />
              </Slider>
            </div>
            <div className={styles.description}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
              </p>

              <div className={styles.buttons}>
                <a
                  className={styles.github}
                  href="https://www.github.com"
                  target="_blank"
                >
                  View Code <i className="fa-brands fa-github-alt"></i>
                </a>
                <a
                  className={styles.demo_link}
                  href="https://www.link.com"
                  target="_blank"
                >
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
