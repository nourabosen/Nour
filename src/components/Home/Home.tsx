import React, { useState, useEffect } from "react";

import { Feed } from "@/components/Feed";
import { Page } from "@/components/Page";
import { Pagination } from "@/components/Pagination";
import { Filter } from "@/components/Filter";
import { Edge, PageContext } from "@/types";
import Hero from "../Hero/Hero";

interface Props {
  edges: Array<Edge>;
  pageContext: PageContext;
}

const Home: React.FC<Props> = ({ edges, pageContext }: Props) => {
  const { pagination } = pageContext;
  const { hasNextPage, hasPrevPage, prevPagePath, nextPagePath, currentPage } =
    pagination;

  const [filteredEdges, setFilteredEdges] = useState(edges);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    let result = edges;

    if (searchQuery) {
      result = result.filter((edge) => {
        const { title } = edge.node.frontmatter;
        const { html } = edge.node;
        const searchableContent = `${title} ${html}`;
        return searchableContent.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }

    if (selectedCategory) {
      result = result.filter(
        (edge) => edge.node.frontmatter.category === selectedCategory
      );
    }

    setFilteredEdges(result);
  }, [searchQuery, selectedCategory, edges]);

  return (
    <div>
      {currentPage === 0 && <Hero />}
      <Page>
        <Filter
          onSearch={setSearchQuery}
          onFilter={setSelectedCategory}
        />
        <Feed edges={filteredEdges} />
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
