import React, { useState, useEffect } from "react";

import { MobileToc } from "@/components/TableOfContents";

import { Meta } from "@/components/Post/Meta";
import * as styles from "./Content.module.scss";

interface Props {
  title: string;
  body: string;
  date: string;
  tags: string[];
  tagSlugs: string[];
  html: string;
}

const Content: React.FC<Props> = ({
  body,
  title,
  date,
  tags,
  tagSlugs,
  html,
}: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      <Meta date={date} tags={tags} tagSlugs={tagSlugs} />
      {isClient && <MobileToc html={html} />}
      <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};

export default Content;
