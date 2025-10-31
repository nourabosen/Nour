import React from "react";
import { Link } from "gatsby";

import * as styles from "./Meta.module.scss";

interface Props {
  date: string;
  tags: string[];
  tagSlugs: string[];
}

export const Meta: React.FC<Props> = ({ date, tags, tagSlugs }) => {
  return (
    <div className={styles.meta}>
      <p className={styles.date}>
        Published on{" "}
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      {tags && tagSlugs && (
        <div className={styles.tags}>
          {tagSlugs.map((slug, i) => (
            <Link to={slug} key={slug} className={styles.tagLink}>
              {tags[i]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
