{
  /* comment */
}
import React from "react";
import "./Footer.css";
import instagram_logo from "../assets/instagram-logo.svg";
import pinterest_logo from "../assets/pinterest-logo.svg";
import tiktok_logo from "../assets/tiktok-logo.svg";
import github_logo from "../assets/github-logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="socialmedia-links">
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram_logo} alt="Instagram" />
        </a>

        <a href="https://www.pinterest.com/" target="_blank">
          <img src={pinterest_logo} alt="Pinterest" />
        </a>

        <a href="https://www.tiktok.com/en/" target="_blank">
          <img src={tiktok_logo} alt="TikTok" />
        </a>

        <a href="https://github.com/amyxgm2/eCommerce-v2" target="_blank">
          <img src={github_logo} alt="GitHub" />
        </a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Paper & Pen. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
