import React, { useEffect } from "react";
import "../style/contact.scss";
import heroContact from "../asset/contact-images/desktop/image-hero.jpg";
import { useForm } from "react-hook-form";
import map from "../asset/contact-images/desktop/image-map.png";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (data) => {
    Swal.fire({
      title: "Success!",
      text: `Thanks for the message ${data.name}. We will get in touch with you in the next few days.`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  return (
    <div className="contact">
      <div className="line"></div>
      <div className="page-name">Contact</div>
      <div className="contact-main">
        <div className="contact-img-wrap">
          <img
            src={heroContact}
            className="contact-hero-img"
            alt="contact main"
          />
        </div>
        <div className="contact-content-wrap">
          <div className="contact-banner" data-aos="fade-down">
            <p>contact</p>
          </div>
          <div className="contact-content" data-aos="fade-down">
            <div className="contact-line"></div>
            <div className="contact-header">Tell us about your project</div>
            <div className="contact-text">
              We’d love to hear more about your project. Please, leave a message
              below or give us a call. We have two offices, one in Texas and one
              in Tennessee. If you find yourself nearby, come say hello!
            </div>
          </div>
        </div>
      </div>

      <div className="contact-details">
        <div className="details-line"></div>

        <div className="details-title" data-aos="fade-down">
          Contact Details
        </div>
        <div className="main-office" data-aos="fade-down">
          <div className="main-office-title">Main office</div>
          <p>Mail: archone@mail.com</p>
          <p>Address: 1892 Chenoweth Drive TN</p>
          <p>Phone: 123-456-3451</p>
          <div className="view-on-map">
            <p>
              View on Map
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="black"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" />
                </g>
              </svg>
            </p>
          </div>
        </div>
        <div className="second-office" data-aos="fade-down">
          <div className="second-office-title">office ||</div>
          <p>Mail: archone@mail.com</p>
          <p>Address: 1892 Chenoweth Drive TN</p>
          <p>Phone: 123-456-3451</p>
          <div className="view-on-map">
            <p>
              View on Map
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="black"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" />
                </g>
              </svg>
            </p>
          </div>
        </div>
      </div>

      <div className="map-wrap">
        <img src={map} className="map" alt="map" />
      </div>

      <div className="contact-form">
        <div className="contact-form-title">Connect with us</div>
        <div className="form" data-aos="fade-right">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrap">
              <input
                type="text"
                name="name"
                ref={register({
                  required: "This cannot be empty",
                  minLength: { value: 2, message: "Too short" },
                })}
                placeholder="Name"
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div className="input-wrap">
              <input
                type="text"
                name="email"
                ref={register({ required: true })}
                placeholder="Email"
              />
              {errors.email && <span>This cannot be empty</span>}
            </div>
            <div className="input-wrap">
              <input
                type="text-area"
                name="message"
                ref={register({ required: true })}
                placeholder="Message"
              />
              {errors.message && <span>This cannot be empty</span>}
              <button className="form-btn" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M15 1l9 9-9 9M0 10h24" />
                  </g>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
