import React, { useState, useEffect } from "react";
import "../style/portfolio.scss";

import seraphImg from "../asset/portfolio-images/image-seraph.jpg";
import seraphImgT from "../asset/portfolio-images/tablet/image-seraph.jpg";

import eebox from "../asset/portfolio-images/image-eebox.jpg";
import eeboxT from "../asset/portfolio-images/tablet/image-eebox.jpg";

import federal from "../asset/portfolio-images/image-federal.jpg";
import federalT from "../asset/portfolio-images/tablet/image-federal.jpg";

import deSol from "../asset/portfolio-images/image-del-sol.jpg";
import deSolT from "../asset/portfolio-images/tablet/image-del-sol.jpg";

import prototype from "../asset/portfolio-images/image-prototype.jpg";
import prototypeT from "../asset/portfolio-images/tablet/image-prototype.jpg";

import bTower from "../asset/portfolio-images/image-228b.jpg";
import bTowerT from "../asset/portfolio-images/tablet/image-228b.jpg";

import edelweiss from "../asset/portfolio-images/image-edelweiss.jpg";
import edelweissT from "../asset/portfolio-images/tablet/image-edelweiss.jpg";

import netcry from "../asset/portfolio-images/image-netcry.jpg";
import netcryT from "../asset/portfolio-images/tablet/image-netcry.jpg";

import hypers from "../asset/portfolio-images/image-hypers.jpg";
import hypersT from "../asset/portfolio-images/tablet/image-hypers.jpg";

import sxiv from "../asset/portfolio-images/image-sxiv.jpg";
import sxivT from "../asset/portfolio-images/tablet/image-sxiv.jpg";

import trinity from "../asset/portfolio-images/image-trinity.jpg";
import trinityT from "../asset/portfolio-images/tablet/image-trinity.jpg";

import paramour from "../asset/portfolio-images/image-paramour.jpg";
import paramourT from "../asset/portfolio-images/tablet/image-paramour.jpg";

const Portfolio = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [projects] = useState([
    {
      id: 1,
      src: seraphImg,
      srcT: seraphImgT,
      title: "Seraph Station",
      date: "september 2019",
    },
    {
      id: 2,
      src: eebox,
      srcT: eeboxT,
      title: "eebox building",
      date: "august 2017",
    },
    {
      id: 3,
      src: federal,
      srcT: federalT,
      title: "federal || Tower",
      date: "march 2017",
    },
    {
      id: 4,
      src: deSol,
      srcT: deSolT,
      title: "project del sol",
      date: "january 2016",
    },
    {
      id: 5,
      src: prototype,
      srcT: prototypeT,
      title: "le prototype",
      date: "october 2015",
    },
    {
      id: 6,
      src: bTower,
      srcT: bTowerT,
      title: "228B tower ",
      date: "april 2015",
    },
    {
      id: 7,
      src: edelweiss,
      srcT: edelweissT,
      title: "grand edelweiss hotel",
      date: "december 2013",
    },
    {
      id: 8,
      src: netcry,
      srcT: netcryT,
      title: "netcry tower",
      date: "august 2012",
    },
    {
      id: 9,
      src: hypers,
      srcT: hypersT,
      title: "hypers",
      date: "january 2012",
    },
    { id: 10, src: sxiv, srcT: sxivT, title: "SXIV Tower", date: "march 2011" },
    {
      id: 11,
      src: trinity,
      srcT: trinityT,
      title: "trinity bank tower",
      date: "september 2010",
    },
    {
      id: 12,
      src: paramour,
      srcT: paramourT,
      title: "project paramour",
      date: "february 2008",
    },
  ]);
  const handleResize = () => {
    let screenWidth = window.innerWidth;
    setScreenWidth(screenWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.scrollTo(0, 0);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="portfolio">
      <div className="line"></div>
      <div className="page-name">Portfolio</div>
      {projects.map((project) => {
        return (
          <div className="project" key={project.id} data-aos="zoom-in">
            {screenWidth < 900 && screenWidth > 550 && (
              <img src={project.srcT} className="project-img" alt="" />
            )}
            {screenWidth >= 900 && (
              <img src={project.src} className="project-img" alt="" />
            )}
            {screenWidth < 550 && (
              <img src={project.src} className="project-img" alt="" />
            )}

            <div className="project-title">{project.title}</div>
            <div className="project-text">{project.date}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
