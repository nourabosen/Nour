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
            <Menu menu={menu} />
          </div>
          <div className={styles.right}>
            <Contacts />
            <Copyright copyright={copyright} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
