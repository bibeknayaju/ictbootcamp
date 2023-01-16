import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer__main">
      <p className="footer__blog">Created by Bibek Nayaju</p>
      <br />

      <button onClick={scrollToTop}>Back to Top</button>
    </div>
  );
}

export default Footer;
