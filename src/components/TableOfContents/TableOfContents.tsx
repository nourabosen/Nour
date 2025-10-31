import React, { useEffect, useState } from "react";
import * as styles from "./TableOfContents.module.scss";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface Props {
  html: string;
  isMobile?: boolean;
}

export const TableOfContents: React.FC<Props> = ({ html, isMobile }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

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

    const handleScroll = () => {
      const headingElements = newHeadings.map((h) => document.getElementById(h.id));
      const activeHeading = headingElements.find((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 150;
        }
        return false;
      });
      if (activeHeading) {
        setActiveId(activeHeading.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [html]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Increased offset for better positioning
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

  if (isMobile) {
    return (
      <nav className={`${styles.toc} ${styles.mobile} ${isOpen ? styles.isOpen : ""}`}>
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
  }

  return (
    <nav className={styles.toc}>
      <ul className={styles.list}>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${styles.item} ${styles[`level${heading.level}`]}`}
          >
            <a
              href={`#${heading.id}`}
              className={`${styles.link} ${activeId === heading.id ? styles.active : ""}`}
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
