import React from "react";

import { Meta } from "@/components/Post/Meta";
import * as styles from "./Content.module.scss";

interface Props {
  title: string;
  body: string;
  date: string;
  tags: string[];
  tagSlugs: string[];
  html: string;
  tableOfContents: React.ReactNode;
}

const Content: React.FC<Props> = ({
  body,
  title,
  date,
  tags,
  tagSlugs,
  tableOfContents,
}: Props) => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      <Meta date={date} tags={tags} tagSlugs={tagSlugs} />
      {tableOfContents}
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export default Content;
