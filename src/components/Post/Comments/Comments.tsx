import React, { useState, useEffect, lazy, Suspense } from "react";

import { useSiteMetadata } from "@/hooks";

const DiscussionEmbed = lazy(() =>
  import("disqus-react").then((mod) => ({ default: mod.DiscussionEmbed }))
);

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
        <Suspense fallback={<div>Loading comments...</div>}>
          <DiscussionEmbed
            shortname={disqusShortname}
            config={{
              url: url + postSlug,
              identifier: postTitle,
              title: postTitle,
            }}
          />
        </Suspense>
      )}
    </>
  );
};

export default Comments;
