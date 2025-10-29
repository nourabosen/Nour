import React from "react";

import { Feed } from "@/components/Feed";
import { Page } from "@/components/Page";
import { Pagination } from "@/components/Pagination";
import { Edge, PageContext } from "@/types";
import Hero from "../Hero/Hero";

import * as styles from "./Home.module.scss";

interface Props {
  edges: Array<Edge>;
  pageContext: PageContext;
}

const Home: React.FC<Props> = ({ edges, pageContext }: Props) => {
  const { pagination } = pageContext;
  const { hasNextPage, hasPrevPage, prevPagePath, nextPagePath, currentPage } =
    pagination;

  return (
    <div className={styles.home}>
      {currentPage === 0 && <Hero />}
      <Page>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </div>
  );
};

export default Home;
