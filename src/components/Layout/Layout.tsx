import React, { useEffect } from "react";

import { useTheme } from "@/hooks";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useSiteMetadata } from "@/hooks";
import { Meta } from "@/components/Meta";

import * as styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  const [{ mode }] = useTheme();
  const { title, subtitle } = useSiteMetadata();

  useEffect(() => {
    document.documentElement.className = mode;
    window.scrollTo(0, 0);
  }, [mode]);

  return (
    <div className={styles.layout}>
      <Meta title={title} description={subtitle} />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
