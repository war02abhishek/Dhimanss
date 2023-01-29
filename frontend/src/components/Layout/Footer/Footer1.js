import React from "react";
import { BsLinkedin, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Dhiman's</h3>
          <div className="share">
            <a target="_blank" href="https://www.facebook.com/">
              <BsFacebook className="FacebookLogo" />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <BsInstagram className="InstagramLogo" />
            </a>
            <a target="_blank" href="https://www.youtube.com/">
              <BsYoutube className="TwitterLogo" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/">
              <BsLinkedin className="LinkedinLogo" />
            </a>
          </div>
          <div className="lower" id="lower">
            <i className="fas fa-arrow-up"></i>
          </div>
        </div>
      </div>
      <div className="credit">
        &#169; Copyrights 2022{" "}
        <span>
          {" "}
          <a href="#">Azu_India Pvt Ltd</a>{" "}
        </span>{" "}
        | all rights reserved{" "}
      </div>
    </section>
  );
};

export default Footer;
