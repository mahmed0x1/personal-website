"use client";

import Slider from "react-slick";
import { useEffect, useState } from "react";
import "node_modules/slick-carousel/slick/slick.css";
import "node_modules/slick-carousel/slick/slick-theme.css";

import { ProjectData, getProjects } from "@/lib/projects";

import Navigation from "@/components/navigation";

import styles from "./page.module.css";

const Projects: React.FC = ({}) => {
  const [deviceType, setDeviceType] = useState("mobile");
  const [shouldRender, setShouldRender] = useState(false);
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const updateDeviceType = () => {
      const newDeviceType =
        document.body.clientWidth < 767 ? "mobile" : "desktop";
      setDeviceType(newDeviceType);
    };

    async function getProjectsData() {
      try {
        const data = await getProjects();
        setProjects(data);
        setActiveProject(0);

        setShouldRender(true);
        console.log(projects[activeProject]);
      } catch (e) {
        console.log(e);
      }
    }

    updateDeviceType();
    getProjectsData();

    window.addEventListener("resize", updateDeviceType);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  const settings = {
    dots: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return shouldRender ? (
    <div className={styles.root}>
      <Navigation active="projects" />
      <div className={styles.main}>
        <div className={styles.projects}>
          {deviceType === "desktop" ? (
            <ul className={styles.projects_list}>
              <li>My Projects:</li>
              {projects.map((project: any, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setActiveProject(index);
                  }}
                  className={styles.active}
                >
                  {project.name}
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
          <div className={styles.project}>
            {deviceType === "desktop" ? (
              <h2>{projects[activeProject].name}</h2>
            ) : (
              <>
                <h2 className={styles.projects_list_mobile}>My Projects</h2>
                <ul className={styles.projects_list_mobile}>
                  {projects.map((project: any, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setActiveProject(index);
                      }}
                      className={styles.active}
                    >
                      {project.name}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div
              className={styles.gallery}
              style={{
                padding:
                  deviceType === "desktop" && projects[activeProject].padding
                    ? "0 25%"
                    : "0px",
              }}
            >
              <Slider adaptiveHeight={true} {...settings}>
                {projects[activeProject].images.map(
                  (imageURL: string, index: number) => (
                    <img key={index} src={imageURL} alt={`Image ${index}`} />
                  )
                )}
              </Slider>
            </div>
            <div className={styles.description}>
              <p>{projects[activeProject].description}</p>

              <div className={styles.buttons}>
                <a
                  className={styles.github}
                  href={projects[activeProject].source_link}
                  target="_blank"
                >
                  View Code <i className="fa-brands fa-github-alt"></i>
                </a>
                <a
                  className={styles.demo_link}
                  href={projects[activeProject].demo_link}
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
  ) : (
    <></>
  );
};

export default Projects;
