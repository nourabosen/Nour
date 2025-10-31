import React from "react";
import { Link } from "gatsby";
import * as styles from "./Featured.module.scss";

const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Work</h2>
        <div className={styles.grid}>
          <Link to="/posts/introducing-fileflow-streamlining-your-digital-workflow" className={styles.card}>
            <h3>FileFlow</h3>
            <p>Streamlining your digital workflow.</p>
            <span className={styles.cta}>Explore the Project</span>
          </Link>
          <Link to="/posts/unlock-your-second-brain-with-insightminer" className={styles.card}>
            <h3>InsightMiner</h3>
            <p>Unlock your second brain.</p>
            <span className={styles.cta}>See the Project</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
