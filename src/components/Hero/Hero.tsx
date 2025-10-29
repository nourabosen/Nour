import React, { useState, useEffect } from "react";

import { Button } from "@/components/Button";

import * as styles from "./Hero.module.scss";

const Hero = () => {
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFaded(true);
      } else {
        setIsFaded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const feedElement = document.getElementById("feed");
    if (feedElement) {
      feedElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${styles.hero} ${isFaded ? styles.faded : ""}`}>
      <h1 className={styles.title}>NOur Abosen</h1>
      <p className={styles.tagline}>
        A devoted dreamer, unwavering in her pursuit of illusions.
      </p>
      <button onClick={handleClick} className={styles.button}>
        Explore Articles
      </button>
    </div>
  );
};

export default Hero;
