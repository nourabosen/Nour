import React from "react";
import * as styles from "./Filter.module.scss";

type Props = {
  categories: string[];
  active: string;
  setActive: (category: string) => void;
};

const Filter: React.FC<Props> = ({ categories, active, setActive }) => {
  return (
    <div className={styles.filter}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.button} ${
            active === category ? styles.active : ""
          }`}
          onClick={() => setActive(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
