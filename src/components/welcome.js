import React from "react";
import "../style/welcome.scss";
import imgWelcome from "../asset/home-images/image-welcome.jpg";
import smallTeam from "../asset/home-images/image-small-team.jpg";
import MainButton from "./tools/main-button";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="welcome">
        <div className="welcome-line"></div>
        <p className="welcome-banner" data-aos="fade-left">
          Welcome
        </p>
        <div className="welcome-content">
          <div className="welcome-title" data-aos="fade-left">
            Welcome to Arch Studio
          </div>
          <div className="welcome-text" data-aos="fade-left">
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </div>
          <div className="welcome-text" data-aos="fade-left">
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </div>

          <div className="welcome-text" data-aos="fade-left">
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </div>
        </div>

        <div className="img-wrap">
          <img src={imgWelcome} className="welcome-img" alt="welcome" />
        </div>
      </div>
      <div className="team-wrap" data-aos="fade-right">
        <div className="small-team-big-ideas">
          <img className="team-img" src={smallTeam} alt="team" />
          <div className="content">
            <p className="team-title">Small team, big ideas</p>
            <div className="button-wrap">
              <Link to="/about">
                <MainButton text="About us" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
