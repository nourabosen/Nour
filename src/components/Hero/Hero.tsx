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

  return (
    <div className={`${styles.hero} ${isFaded ? styles.faded : ""}`}>
      <h1 className={styles.title}>NOur Abosen</h1>
      <p className={styles.tagline}>
        A devoted dreamer, unwavering in her pursuit of illusions.
      </p>
      <Button to="/articles">Explore Articles</Button>
    </div>
  );
};

export default Hero;
