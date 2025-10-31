import React, { useState } from "react";
import { Link } from "gatsby";
import useSiteMetadata from "../../hooks/use-site-metadata";
import Hamburger from "@/components/Hamburger/Hamburger";
import * as styles from "./Header.module.scss";

interface MenuItem {
  label: string;
  path: string;
}

export const Header: React.FC = () => {
  const { menu } = useSiteMetadata();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          NOur's Blog
        </Link>
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            {menu.map((item: MenuItem) => (
              <li key={item.path} className={styles.navItem}>
                <Link
                  to={item.path}
                  className={styles.navLink}
                  activeClassName={styles.navLinkActive}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.hamburger}>
          <Hamburger isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};
