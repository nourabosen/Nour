import React from "react";

import { Link } from "gatsby";

import { Edge } from "@/types";

import * as styles from "./Feed.module.scss";

type Props = {
  edges: Array<Edge>;
};

const Feed: React.FC<Props> = ({ edges }: Props) => (
  <div className={styles.feed} id="feed">
    {edges.map((edge) => {
      const {
        frontmatter: {
          title,
          date,
          category,
          description,
          thumbnail,
          slug: frontmatterSlug,
        },
        fields: { slug: fieldsSlug, categorySlug },
      } = edge.node;
      const slug = frontmatterSlug || fieldsSlug;

      return (
        <article key={slug} className={styles.item}>
          {thumbnail && (
            <Link to={slug} className={styles.thumbnailLink}>
              <img
                src={thumbnail.publicURL}
                className={styles.thumbnail}
                alt={title}
              />
            </Link>
          )}
          <div className={styles.content}>
            <div className={styles.meta}>
              <time
                className={styles.time}
                dateTime={new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              >
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </time>
              <span className={styles.divider} />
              {category && (
                <span className={styles.category}>
                  <Link
                    to={categorySlug}
                    className={`${styles.link} ${
                      styles[category.toLowerCase()]
                    }`}
                  >
                    {category}
                  </Link>
                </span>
              )}
            </div>
            <h2 className={styles.title}>
              <Link className={styles.link} to={slug}>
                {title}
              </Link>
            </h2>
            {description && (
              <p className={styles.description}>{description}</p>
            )}
            <div className={styles.footer}>
              <Link className={styles.more} to={slug}>
                Read
              </Link>
            </div>
          </div>
        </article>
      );
    })}
  </div>
);

export default Feed;
