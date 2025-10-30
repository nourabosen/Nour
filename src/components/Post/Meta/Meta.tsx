import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import CommentCount from "../Comments/CommentCount";
import * as styles from "./Meta.module.scss";

interface Props {
  date: string;
  tags: string[];
  tagSlugs: string[];
  postTitle: string;
  postSlug: string;
}

export const Meta: React.FC<Props> = ({
  date,
  tags,
  tagSlugs,
  postTitle,
  postSlug,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
      {isClient && <CommentCount postTitle={postTitle} postSlug={postSlug} />}
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
