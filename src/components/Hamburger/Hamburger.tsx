import React from "react";

import * as styles from "./Hamburger.module.scss";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<Props> = ({ isOpen, onClick }) => (
  <button
    className={`${styles.hamburger} ${isOpen ? styles.isOpen : ""}`}
    onClick={onClick}
  >
    <div className={styles.bar} />
    <div className={styles.bar} />
    <div className={styles.bar} />
  </button>
);

export default Hamburger;
