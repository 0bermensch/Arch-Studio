import React, { useState, useEffect } from "react";
import "../style/featured.scss";
import MainBtn from "./tools/main-button";
import firstProject from "../asset/portfolio-images/image-del-sol.jpg";
import firstProjectT from "../asset/portfolio-images/tablet/image-del-sol.jpg";
import secondProject from "../asset/portfolio-images/image-228b.jpg";
import secondProjectT from "../asset/portfolio-images/tablet/image-228b.jpg";
import thirdProject from "../asset/portfolio-images/image-prototype.jpg";
import thirdProjectT from "../asset/portfolio-images/tablet/image-prototype.jpg";
import { Link } from "react-router-dom";
const Featured = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [exampleProjects] = useState([
    {
      id: 1,
      title: "Project Del Sol",
      src: firstProject,
      srcT: firstProjectT,
      aosDelay: "100",
    },
    {
      id: 2,
      title: "228B Tower",
      src: secondProject,
      srcT: secondProjectT,
      aosDelay: "200",
    },
    {
      id: 3,
      title: "Le Prototype",
      src: thirdProject,
      srcT: thirdProjectT,
      aosDelay: "300",
    },
  ]);

  const handleResize = () => {
    let screenWidth = window.innerWidth;
    setScreenWidth(screenWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="featured">
      <div className="title-wrap">
        <p className="main-title">Featured</p>
        <div className="button-wrap">
          <Link to="/portfolio">
            <MainBtn text="See All" />
          </Link>
        </div>
      </div>
      <div className="example-projects">
        {exampleProjects.map((project, index) => {
          return (
            <div
              key={project.id}
              className="example-project"
              data-aos="fade-down"
              data-aos-delay={project.aosDelay}
            >
              {screenWidth <= 1146 ? (
                <div className="example-project-img">
                  <img src={project.srcT} alt="project" />
                </div>
              ) : (
                <div className="example-project-img">
                  <img src={project.src} alt="project" />
                </div>
              )}

              <div className="example-project-number">{index + 1}</div>
              <div className="example-project-title">{project.title}</div>
              <div className="example-project-text">View All Projects</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
