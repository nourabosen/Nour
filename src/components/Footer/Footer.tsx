import React from "react";

import { useSiteMetadata } from "@/hooks";
import { getContactHref } from "@/utils";

import { Contacts } from "@/components/Sidebar/Contacts";
import { Copyright } from "@/components/Sidebar/Copyright";
import { Menu } from "@/components/Sidebar/Menu";

import * as styles from "./Footer.module.scss";

const Footer = () => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h3>Quick Links</h3>
            <Menu menu={menu} />
          </div>
          <div className={styles.center}>
            <h3>Follow Me</h3>
            <Contacts />
          </div>
          <div className={styles.right}>
            <h3>About Me</h3>
            <p>{author.bio}</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <Copyright copyright={copyright} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
