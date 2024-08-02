import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dolores minima facilis sunt fuga eius harum debitis
            repudiandae voluptatem distinctio? Culpa harum blanditiis et nostrum
            reprehenderit ipsam, quasi sequi! Et.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+919999999999</li>
            <li>Contact@samrat.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">copyurith 2024</p>
    </div>
  );
};

export default Footer;
