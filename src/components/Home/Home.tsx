import React from "react";

import { Feed } from "@/components/Feed";
import { Page } from "@/components/Page";
import { Pagination } from "@/components/Pagination";
import { Edge, PageContext } from "@/types";

import * as styles from "./Home.module.scss";

interface Props {
  edges: Array<Edge>;
  pageContext: PageContext;
}

const Home: React.FC<Props> = ({ edges, pageContext }: Props) => {
  const { pagination } = pageContext;
  const { hasNextPage, hasPrevPage, prevPagePath, nextPagePath } = pagination;

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.title}>NOur Abosen</h1>
        <p className={styles.tagline}>
          A devoted dreamer, unwavering in her pursuit of illusions.
        </p>
      </div>
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
