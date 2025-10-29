import React, { useState } from "react";

import { useSiteMetadata } from "@/hooks";
import { Hamburger } from "@/components/Hamburger";

import { Author } from "./Author";
import { Contacts } from "./Contacts";
import { Copyright } from "./Copyright";
import { Menu } from "./Menu";

import * as styles from "./Sidebar.module.scss";

type Props = {
  isIndex?: boolean;
};

const Sidebar = ({ isIndex }: Props) => {
  const { copyright, menu } = useSiteMetadata();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.isOpen : ""}`}>
      <Hamburger isOpen={isOpen} onClick={toggleMenu} />
      <div className={styles.inner}>
        <Author isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
