import React, { useState } from "react";
import "../style/slider.scss";
import MainButton from "../components/tools/main-button";
import firstSlide from "../asset/home-images/image-hero-paramour.jpg";
import secondSlide from "../asset/home-images/image-hero-seraph.jpg";
import thirdSlide from "../asset/home-images/image-hero-federal.jpg";
import fourthSlide from "../asset/home-images/image-hero-trinity.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import SwiperCore, { EffectFade } from "swiper";
import { Link } from "react-router-dom";

const Slider = () => {
  SwiperCore.use([EffectFade]);

  const [swiper, setSwiper] = useState({});
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project Paramour",
      text:
        "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture. ",
      src: firstSlide,
      btnClass: "slider-item slider-item-active",
    },
    {
      id: 2,
      title: "Seraph Station",
      text:
        "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
      src: secondSlide,
      btnClass: "slider-item",
    },

    {
      id: 3,
      title: "Federal II Tower",
      text:
        "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
      src: thirdSlide,
      btnClass: "slider-item",
    },

    {
      id: 4,
      title: "Trinity Bank Tower",
      text:
        "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
      src: fourthSlide,
      btnClass: "slider-item",
    },
  ]);

  const changeBtnClass = (index) => {
    let tempArr = [...projects];
    for (let i = 0; i < tempArr.length; i++) {
      if (i === index) {
        let item = tempArr[index];
        item.btnClass = "slider-item slider-item-active";
      } else tempArr[i].btnClass = "slider-item";
    }

    setProjects(tempArr);
  };

  const swiperInit = (swiper) => {
    setSwiper(swiper);
  };

  const handleSlide = (index) => {
    swiper.slideTo(index);
    changeBtnClass(index);
  };
  return (
    <div className="slider" data-aos="fade-right">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        allowTouchMove={false}
        effect="fade"
        onSwiper={(swiper) => swiperInit(swiper)}
      >
        {projects.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="main">
                <img src={item.src} className="project-img" alt="project" />

                <div className="content">
                  <div className="project-title">{item.title}</div>
                  <div className="project-text">{item.text}</div>
                  <div className="show-portfolio-wrap">
                    <Link to="/portfolio">
                      <MainButton text="See our portfolio" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="number-slider">
        {projects.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => handleSlide(index)}
              className={item.btnClass}
            >
              0{index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
