import React, { useState, useEffect } from "react";
import { DiscussionEmbed } from "disqus-react";

import { useSiteMetadata } from "@/hooks";

interface Props {
  postTitle: string;
  postSlug: string;
}

const Comments: React.FC<Props> = ({ postTitle, postSlug }: Props) => {
  const { url, disqusShortname } = useSiteMetadata();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!disqusShortname) {
    return null;
  }

  return (
    <>
      {isClient && (
        <DiscussionEmbed
          shortname={disqusShortname}
          config={{
            url: url + postSlug,
            identifier: postTitle,
            title: postTitle,
          }}
        />
      )}
    </>
  );
};

export default Comments;
