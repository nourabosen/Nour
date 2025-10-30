import React, { useState } from "react";
import { TableOfContents } from "./TableOfContents";
import * as styles from "./MobileToc.module.scss";

interface Props {
  html: string;
}

export const MobileToc: React.FC<Props> = ({ html }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleToc = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.mobileToc}>
      <button onClick={toggleToc} className={styles.button}>
        Table of Contents
      </button>
      {isOpen && (
        <div className={styles.drawer}>
          <div className={styles.drawerContent}>
            <TableOfContents html={html} />
            <button onClick={toggleToc} className={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
