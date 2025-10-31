import React, { useState } from "react";
import { Link } from "gatsby";
import { Edge } from "@/types";
import { Filter } from "@/components/Filter";
import * as styles from "./Feed.module.scss";

type Props = {
  edges: Array<Edge>;
};

const Feed: React.FC<Props> = ({ edges }: Props) => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(edges.map(edge => edge.node.frontmatter.category).filter(Boolean))];

  const filteredEdges = filter === "All" ? edges : edges.filter(edge => edge.node.frontmatter.category === filter);

  return (
    <div className={styles.feed} id="feed">
      <Filter categories={categories} active={filter} setActive={setFilter} />
      {filteredEdges.map((edge) => {
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
          <Link to={slug} key={slug} className={styles.link}>
            <article className={styles.item}>
              {thumbnail && (
                <div className={styles.thumbnailContainer}>
                  <img
                    src={thumbnail.publicURL}
                    className={styles.thumbnail}
                    alt={title}
                  />
                </div>
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
                      <span
                        className={`${styles.categoryLink} ${
                          styles[category.toLowerCase()]
                        }`}
                      >
                        {category}
                      </span>
                    </span>
                  )}
                </div>
                <h2 className={styles.title}>{title}</h2>
                {description && (
                  <p className={styles.description}>{description}</p>
                )}
                <div className={styles.footer}>
                  <span className={styles.more}>Read</span>
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
