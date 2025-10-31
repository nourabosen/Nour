import React from "react";
import { graphql } from "gatsby";

import Meta from "@/components/Meta/Meta";
import { Node } from "@/types";

interface Props {
  data: {
    markdownRemark: Node;
  };
}

const PostTemplate: React.FC<Props> = ({ data: { markdownRemark } }: Props) => (
  <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
);

export const query = graphql`
  query PostTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        thumbnail {
          publicURL
        }
      }
    }
  }
`;

export default PostTemplate;
