import React from "react";
import { CommentCount as DisqusCommentCount } from "disqus-react";

import { useSiteMetadata } from "@/hooks";

interface Props {
  postTitle: string;
  postSlug: string;
}

const CommentCount: React.FC<Props> = ({ postTitle, postSlug }: Props) => {
  const { url, disqusShortname } = useSiteMetadata();

  if (!disqusShortname) {
    return null;
  }

  return (
    <DisqusCommentCount
      shortname={disqusShortname}
      config={{
        url: url + postSlug,
        identifier: postTitle,
        title: postTitle,
      }}
    >
      Comments
    </DisqusCommentCount>
  );
};

export default CommentCount;
