import React from "react";

import { graphql } from "gatsby";

import { Home } from "@/components/Home";
import { Layout } from "@/components/Layout";
import { Meta } from "@/components/Meta";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata } from "@/hooks";
import { Edge, PageContext } from "@/types";

interface Props {
  data: {
    allMarkdownRemark: {
      group: Array<{
        edges: Array<Edge>;
      }>;
    };
  };
  pageContext: PageContext;
}

const IndexTemplate: React.FC<Props> = ({ data, pageContext }: Props) => {
  const { group } = data.allMarkdownRemark;
  const edges = group.map((g) => g.edges[0]);

  return (
    <Layout>
      <Sidebar isIndex />
      <Home edges={edges} pageContext={pageContext} />
    </Layout>
  );
};

export const query = graphql`
  query IndexTemplate($limit: Int!, $offset: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $offset
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: fields___slug) {
        edges {
          node {
            fields {
              categorySlug
              slug
            }
            frontmatter {
              description
              category
              title
              date
              slug
            }
          }
        }
      }
    }
  }
`;

export const Head: React.FC<Props> = ({ pageContext }) => {
  const { title, subtitle } = useSiteMetadata();
  const {
    pagination: { currentPage: page },
  } = pageContext;
  const pageTitle = page > 0 ? `Posts - Page ${page} - ${title}` : title;

  return <Meta title={pageTitle} description={subtitle} />;
};

export default IndexTemplate;
