import React from "react";

import { Link } from "gatsby";

import { Image } from "@/components/Image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useSiteMetadata } from "@/hooks";

import * as styles from "./Author.module.scss";

type Props = {
  isIndex?: boolean;
};

const Author = ({ isIndex }: Props) => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.author}>
      <Link to="/">
        <Image alt={author.name} path={author.photo} className={styles.photo} />
      </Link>

      <div className={styles.titleContainer}>
      {isIndex ? (
        <h1 className={styles.title}>
          <Link className={styles.link} to="/">
            {author.name}
          </Link>
        </h1>
      ) : (
        <h2 className={styles.title}>
          <Link className={styles.link} to="/">
            {author.name}
          </Link>
        </h2>
      )}
      <ThemeSwitcher />
    </div>
    {isIndex && <p className={styles.subtitle}>{author.bio}</p>}
  </div>
)};

export default Author;
