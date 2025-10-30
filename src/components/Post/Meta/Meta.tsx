import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "gatsby";
import * as styles from "./Meta.module.scss";

const CommentCount = lazy(() => import("../Comments/CommentCount"));

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
      {isClient && (
        <Suspense fallback={<span>...</span>}>
          <CommentCount postTitle={postTitle} postSlug={postSlug} />
        </Suspense>
      )}
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
