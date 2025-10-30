import React from "react";

import { MobileToc } from "@/components/TableOfContents";

import { Meta } from "../Meta/Meta";
import * as styles from "./Content.module.scss";

interface Props {
  title: string;
  body: string;
  date: string;
  tags: string[];
  tagSlugs: string[];
  postTitle: string;
  postSlug: string;
  html: string;
}

const Content: React.FC<Props> = ({
  body,
  title,
  date,
  tags,
  tagSlugs,
  postTitle,
  postSlug,
  html,
}: Props) => (
  <div className={styles.content}>
    <h1 className={styles.title}>{title}</h1>
    <Meta
      date={date}
      tags={tags}
      tagSlugs={tagSlugs}
      postTitle={postTitle}
      postSlug={postSlug}
    />
    <MobileToc html={html} />
    <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
