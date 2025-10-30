import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Index } from "lunr";

import { Feed } from "@/components/Feed";
import { Page } from "@/components/Page";
import { Pagination } from "@/components/Pagination";
import { Filter } from "@/components/Filter";
import { Edge, PageContext } from "@/types";
import Hero from "../Hero/Hero";

interface Props {
  edges: Array<Edge>;
  pageContext: PageContext & {
    lunrIndex: any;
  };
}

const Home: React.FC<Props> = ({ edges, pageContext }: Props) => {
  const { pagination, lunrIndex } = pageContext;
  const { hasNextPage, hasPrevPage, prevPagePath, nextPagePath, currentPage } =
    pagination;

  const [filteredEdges, setFilteredEdges] = useState(edges);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  const allNodes = allMarkdownRemark.edges.map(
    (edge: { node: { id: string } }) => edge.node
  );

  useEffect(() => {
    let result: Edge[] = edges;

    if (searchQuery && lunrIndex) {
      const index = Index.load(lunrIndex);
      const searchResults = index.search(searchQuery);
      const searchIds = searchResults.map((result) => result.ref);
      result = allNodes
        .filter((node: { id: string }) => searchIds.includes(node.id))
        .map((node: { id: string }) =>
          edges.find((edge) => edge.node.id === node.id)
        )
        .filter(Boolean) as Array<Edge>;
    }

    if (selectedCategory) {
      result = result.filter(
        (edge) => edge.node.frontmatter.category === selectedCategory
      );
    }

    setFilteredEdges(result);
  }, [searchQuery, selectedCategory, edges, lunrIndex, allNodes]);

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
