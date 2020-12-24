import React from "react";
import Slider from "./slider";
import "../style/main.scss";
import Featured from "./featured";
import Welcome from "./welcome";
const Main = () => {
  return (
    <div className="main">
      <div className="line"></div>
      <div className="page-name">HOME</div>
      <Slider />
      <Welcome />
      <Featured />
    </div>
  );
};

export default Main;
