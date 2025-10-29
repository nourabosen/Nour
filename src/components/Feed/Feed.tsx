import React from "react";

import { Link } from "gatsby";

import { Edge } from "@/types";

import * as styles from "./Feed.module.scss";

type Props = {
  edges: Array<Edge>;
};

const Feed: React.FC<Props> = ({ edges }: Props) => (
  <div className={styles.feed} id="feed">
    {edges.map((edge) => (
      <Link
        to={edge.node.frontmatter?.slug || edge.node.fields.slug}
        key={edge.node.fields.slug}
        className={styles.item}
      >
        {edge.node.frontmatter.thumbnail && (
          <img
            src={edge.node.frontmatter.thumbnail.publicURL}
            className={styles.thumbnail}
            alt={edge.node.frontmatter.title}
          />
        )}
        <div className={styles.meta}>
          <time
            className={styles.time}
            dateTime={new Date(edge.node.frontmatter.date).toLocaleDateString(
              "en-US",
              { year: "numeric", month: "long", day: "numeric" },
            )}
          >
            {new Date(edge.node.frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </time>
          <span className={styles.divider} />
          <span className={styles.category}>
            <Link
              to={edge.node.fields.categorySlug}
              className={`${styles.link} ${
                styles[edge.node.frontmatter.category.toLowerCase()]
              }`}
            >
              {edge.node.frontmatter.category}
            </Link>
          </span>
        </div>
        <h2 className={styles.title}>
          <Link
            className={styles.link}
            to={edge.node.frontmatter?.slug || edge.node.fields.slug}
          >
            {edge.node.frontmatter.title}
          </Link>
        </h2>
        <Link
          className={styles.more}
          to={edge.node.frontmatter?.slug || edge.node.fields.slug}
        >
          Read
        </Link>
      </Link>
    ))}
  </div>
);

export default Feed;
