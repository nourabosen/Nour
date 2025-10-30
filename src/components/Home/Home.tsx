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
    const fetchIndexAndSearch = async () => {
      let result: Edge[] = allEdges;

      if (searchQuery && lunrIndex) {
        const response = await fetch(lunrIndex);
        const indexJson = await response.json();
        const index = Index.load(indexJson);
        const searchResults = index.search(`*${searchQuery}*`);
        const searchIds = searchResults.map((result) => result.ref);
        result = allEdges.filter((edge: Edge) =>
          searchIds.includes(edge.node.id)
        );
      }

      if (selectedCategory) {
        result = result.filter(
          (edge) => edge.node.frontmatter.category === selectedCategory
        );
      }

      setFilteredEdges(result);
    };

    fetchIndexAndSearch();
  }, [searchQuery, selectedCategory, allEdges, lunrIndex]);

  return (
    <div>
      {currentPage === 0 && <Hero />}
      <Page>
        <Filter onSearch={setSearchQuery} onFilter={setSelectedCategory} />
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
