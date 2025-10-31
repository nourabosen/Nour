import React, { useState, useEffect } from "react";
import { TableOfContents } from "@/components/TableOfContents";
import type { Node } from "@/types";

import { Content } from "./Content";

import * as styles from "./Post.module.scss";

interface Props {
  post: Node;
}

const Post: React.FC<Props> = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Content
            body={html}
            title={title}
            date={date}
            tags={tags || []}
            tagSlugs={tagSlugs || []}
            html={html}
            tableOfContents={isClient && <TableOfContents html={html} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
