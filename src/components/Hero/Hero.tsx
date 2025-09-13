import React from "react";

import { Button } from "@/components/Button";

import * as styles from "./Hero.module.scss";

const Hero = () => (
  <div className={styles.hero}>
    <h1 className={styles.title}>NOur Abosen</h1>
    <p className={styles.tagline}>
      A devoted dreamer, unwavering in her pursuit of illusions.
    </p>
    <Button to="/articles">Explore Articles</Button>
  </div>
);

export default Hero;
