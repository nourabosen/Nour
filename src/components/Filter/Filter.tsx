import React from "react";
import { useCategoriesList } from "@/hooks";
import * as styles from "./Filter.module.scss";

type Props = {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
};

const Filter: React.FC<Props> = ({ onSearch, onFilter }) => {
  const categories = useCategoriesList();

  return (
    <div className={styles.filter}>
      <select
        onChange={(e) => onFilter(e.target.value)}
        className={styles.categorySelect}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.fieldValue} value={category.fieldValue}>
            {category.fieldValue}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
};

export default Filter;
