import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

import * as constants from "./constants";
import * as types from "./types";
import * as utils from "./utils";

const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const { frontmatter }: types.Edge["node"] = node;
    const { tags, category } = frontmatter || {};

    const value = frontmatter?.slug || createFilePath({ node, getNode });
    createNodeField({
      node,
      name: "slug",
      value,
    });

    if (tags) {
      const tagSlugs = tags.map((tag) =>
        utils.concat(
          constants.routes.tagRoute,
          "/",
          utils.toKebabCase(tag),
          "/",
        ),
      );

      createNodeField({ node, name: "tagSlugs", value: tagSlugs });
    }

    if (category) {
      const categorySlug = utils.concat(
        constants.routes.categoryRoute,
        "/",
        utils.toKebabCase(category),
        "/",
      );

      createNodeField({ node, name: "categorySlug", value: categorySlug });
    }
  }
};

export { onCreateNode };
