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
          <div className={styles.column}>
            <h3 className={styles.title}>Quick Links</h3>
            <Menu menu={menu} />
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Follow Me</h3>
            <Contacts />
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>About Me</h3>
            <p className={styles.bio}>{author.bio}</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <Copyright copyright={copyright} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
