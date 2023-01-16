import React, { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [isSticky, setIsSticky] = useState(false);
  const some_value = 200;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > some_value) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <>
      <div
        className={`about-us-component ${isSticky ? "sticky" : ""}`}
        id="about__StickyDiv">
        {/* className="About__main" */}
        <div className="About__Above">
          <h2>About</h2>
          <p>
            Customize this section to tell your visitors a little bit about your
            publication, writers, content, or something else entirely. Totally
            up to you.
          </p>
        </div>

        <div className="About__middle">
          <h2>Archives</h2>
          <div className="About__middleLink">
            <a href="#">March 2021</a>
            <a href="#">February 2021</a>
            <a href="#">January 2021</a>
            <a href="#">December 2020</a>
            <a href="#">November 2020</a>
            <a href="#">October 2020</a>
            <a href="#">September 2020</a>
            <a href="#">August 2020</a>
            <a href="#">July 2020</a>
            <a href="#">June 2020</a>
            <a href="#">May 2020</a>
            <a href="#">April 2020</a>
          </div>
        </div>

        <div className="About__bottom">
          <h2>Elsewhere</h2>
          <div className="About__bottomLink">
            <a href="#">Github</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
