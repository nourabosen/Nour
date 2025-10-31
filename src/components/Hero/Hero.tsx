import React from "react";
import { Link } from "gatsby";
import * as styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>NOur's Blog</h1>
        <p className={styles.tagline}>
          A mathematician's journey through code, creativity, and chaos.
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
