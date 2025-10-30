import React from "react";
import { Link } from "gatsby";
import { useCategoriesList } from "@/hooks";
import * as styles from "./Filter.module.scss";

interface Props {
  onFilter: (category: string) => void;
  onSearch: (query: string) => void;
}

export const Filter: React.FC<Props> = ({ onFilter, onSearch }) => {
  const categories = useCategoriesList();

  return (
    <div className={styles.filter}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search articles..."
          onChange={(e) => onSearch(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.categories}>
        <select
          onChange={(e) => onFilter(e.target.value)}
          className={styles.categorySelect}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.fieldValue} value={category.fieldValue}>
              {category.fieldValue} ({category.totalCount})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
