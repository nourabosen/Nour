import React from "react";
import { Link } from "gatsby";
import * as styles from "./Featured.module.scss";

const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Work</h2>
        <div className={styles.grid}>
          <Link to="/posts/predicting-blood-sugar-a-machine-learning-approach" className={styles.card}>
            <h3>Predicting Blood Sugar</h3>
            <p>A machine learning approach to diabetes management.</p>
            <span className={styles.cta}>Explore the Project</span>
          </Link>
          <Link to="/posts/visualizing-pi-a-symphony-of-digits" className={styles.card}>
            <h3>Visualizing Pi</h3>
            <p>A creative exploration of mathematical artistry.</p>
            <span className={styles.cta}>See the Visualization</span>
          </Link>
          <Link to="/pages/papers" className={styles.card}>
            <h3>Published Research</h3>
            <p>A collection of my academic papers and publications.</p>
            <span className={styles.cta}>Read the Papers</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
