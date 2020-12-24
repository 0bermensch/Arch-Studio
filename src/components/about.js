import React, { useState, useEffect } from "react";
import "../style/about.scss";
import heroImg from "../asset/about-images/image-hero.jpg";
import heritageImg from "../asset/about-images/image-heritage.jpg";
import jakeImg from "../asset/about-images/avatar-jake.jpg";
import thompsonImg from "../asset/about-images/avatar-thompson.jpg";
import jacksonImg from "../asset/about-images/avatar-jackson.jpg";
import mariaImg from "../asset/about-images/avatar-maria.jpg";
import TwitterIcon from "./tools/twitter-icon";
import LinkedInIcon from "./tools/linkedin-icon";

const About = () => {
  const [team] = useState([
    {
      id: 1,
      name: "Jake Richards",
      img: jakeImg,
      role: "Chief Architect",
      aosDelay: "100",
    },
    {
      id: 2,
      name: "Thompson Smith",
      img: thompsonImg,
      role: "Header of Fiance",
      aosDelay: "200",
    },
    {
      id: 3,
      name: "Jackson Rourke",
      img: jacksonImg,
      role: "Lead Designer",
      aosDelay: "300",
    },
    {
      id: 4,
      name: "Maria Simpson",
      img: mariaImg,
      role: "Senior Architect",
      aosDelay: "400",
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <div className="line"></div>
      <div className="page-name">About Us</div>
      <div className="about-main">
        <div className="about-img-wrap">
          <img src={heroImg} className="about-hero-img" alt="about main" />
        </div>
        <div className="about-content-wrap">
          <div className="about-banner" data-aos="fade-down">
            <p>About</p>
          </div>
          <div className="about-content">
            <div className="about-line" data-aos="fade-down"></div>
            <div className="about-header" data-aos="fade-down">
              Your Team of professionals
            </div>
            <div className="about-text" data-aos="fade-down">
              Our small team of world-class professionals will work with you
              every step of the way. Strong relationships are at the core of
              everything we do. This extends to the relationship our projects
              have with their surroundings.
            </div>
          </div>
        </div>
      </div>

      <div className="heritage">
        <div className="heritage-line"></div>
        <div className="heritage-content" data-aos="fade-right">
          <div className="heritage-header">Our Heritage</div>

          <div className="heritage-text">
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </div>
          <div className="heritage-text">
            {" "}
            Specializing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
          </div>
          <div className="heritage-text">
            Our small team of world-class professionals provides input on every
            project.
          </div>
        </div>
        <div className="heritage-image-wrap" data-aos="fade-left">
          <img src={heritageImg} className="heritage-img" alt="heritage" />
        </div>
      </div>

      <div className="leaders">
        <div className="leaders-title">the leaders</div>

        <div className="team">
          {team.map((worker) => {
            return (
              <div
                className="worker"
                key={worker.id}
                data-aos="zoom-in"
                data-aos-delay={worker.aosDelay}
              >
                <div className="worker-img-wrap">
                  <img src={worker.img} className="worker-img" alt="" />
                  <div className="overlay">
                    <TwitterIcon fill="white" className="twitter-icon icon" />
                    <LinkedInIcon fill={"white"} className="icon" />
                  </div>
                </div>

                <div className="worker-name">{worker.name}</div>
                <div className="worker-role">{worker.role}</div>
                <div className="tablet-icons">
                  <TwitterIcon fill="black" className="twitter-icon icon" />
                  <LinkedInIcon fill="black" className="icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
