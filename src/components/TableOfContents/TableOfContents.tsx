import React, { useEffect, useState } from "react";
import * as styles from "./TableOfContents.module.scss";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface Props {
  html: string;
}

export const TableOfContents: React.FC<Props> = ({ html }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const headingElements = doc.querySelectorAll("h2, h3");
    const newHeadings: Heading[] = [];
    headingElements.forEach((heading) => {
      newHeadings.push({
        id: heading.id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.substring(1)),
      });
    });
    setHeadings(newHeadings);
  }, [html]);

  return (
    <nav className={styles.toc}>
      <h3 className={styles.title}>On this page</h3>
      <ul className={styles.list}>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${styles.item} ${styles[`level${heading.level}`]}`}
          >
            <a href={`#${heading.id}`} className={styles.link}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
