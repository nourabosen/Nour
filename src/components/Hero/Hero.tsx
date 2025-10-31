import React from "react";
import { Link } from "gatsby";
import * as styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Nour Abosen</h1>
        <h2 className={styles.subtitle}>Mathematician, Developer, Creator</h2>
        <p className={styles.tagline}>
          Exploring the intersections of code, creativity, and chaos.
        </p>
        <div className={styles.buttons}>
          <Link to="/pages/about" className={styles.button}>
            About Me
          </Link>
          <Link to="/pages/projects" className={styles.buttonSecondary}>
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
