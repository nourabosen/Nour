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
  const { author, copyright, menu } = useSiteMetadata();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.isOpen : ""}`}>
      <Hamburger isOpen={isOpen} onClick={toggleMenu} />
      <div className={styles.inner}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
