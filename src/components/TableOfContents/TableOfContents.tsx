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
  const [isOpen, setIsOpen] = useState(false);

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Increased offset for better positioning
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`${styles.toc} ${isOpen ? styles.isOpen : ""}`}>
      <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        <h3 className={styles.title}>On this page</h3>
      </button>
      <ul className={styles.list}>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${styles.item} ${styles[`level${heading.level}`]}`}
          >
            <a
              href={`#${heading.id}`}
              className={styles.link}
              onClick={(e) => handleLinkClick(e, heading.id)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
