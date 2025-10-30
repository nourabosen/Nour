import React from "react";

import { Button } from "@/components/Button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { TableOfContents, MobileToc } from "@/components/TableOfContents";
import type { Node } from "@/types";

import { Author } from "./Author";
import { Comments } from "./Comments";
import { Content } from "./Content";

import * as styles from "./Post.module.scss";

interface Props {
  post: Node;
}

const Post: React.FC<Props> = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

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
            postTitle={title}
            postSlug={slug}
            html={html}
          />
        </div>
        <TableOfContents html={html} />
      </div>
      <div className={styles.comments}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
