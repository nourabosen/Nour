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

declare global {
  interface Window {
    __LUNR__: {
      [key: string]: {
        index: Index;
        store: {
          [key: string]: any;
        };
      };
    };
  }
}

const Home: React.FC<Props> = ({ edges, pageContext }: Props) => {
  const { pagination } = pageContext;
  const { hasNextPage, hasPrevPage, prevPagePath, nextPagePath, currentPage } =
    pagination;

  const [filteredEdges, setFilteredEdges] = useState(edges);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
              categorySlug
            }
            frontmatter {
              title
              date
              category
              description
              slug
              thumbnail {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  const allEdges = allMarkdownRemark.edges;

  useEffect(() => {
    if (searchQuery && window.__LUNR__) {
      const lunrIndex = window.__LUNR__["en"];
      const searchResults = lunrIndex.index.search(`*${searchQuery}*`);
      const searchIds = searchResults.map((result) => result.ref);
      const result = allEdges.filter((edge: Edge) =>
        searchIds.includes(edge.node.id)
      );
      setFilteredEdges(result);
    } else {
      let result: Edge[] = allEdges;
      if (selectedCategory) {
        result = result.filter(
          (edge) => edge.node.frontmatter.category === selectedCategory
        );
      }
      setFilteredEdges(result);
    }
  }, [searchQuery, selectedCategory, allEdges]);

  return (
    <div>
      {currentPage === 0 && <Hero />}
      <Filter onSearch={setSearchQuery} onFilter={setSelectedCategory} />
      <Page>
        <Feed edges={filteredEdges} />
        {!searchQuery && !selectedCategory && (
          <Pagination
            prevPagePath={prevPagePath}
            nextPagePath={nextPagePath}
            hasPrevPage={hasPrevPage}
            hasNextPage={hasNextPage}
          />
        )}
      </Page>
    </div>
  );
};

export default Home;
