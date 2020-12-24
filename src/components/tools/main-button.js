import React from "react";
import "../../style/general.scss";
import arrow from "../../asset/icons/icon-arrow.svg";

const MainButton = ({ text }) => {
  return (
    <button className="main-btn">
      {text}
      <img src={arrow} className="arrow" alt="" />
    </button>
  );
};

export default MainButton;
