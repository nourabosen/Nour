import React, { useState, useEffect, lazy, Suspense } from "react";

import { useSiteMetadata } from "@/hooks";

const DisqusCommentCount = lazy(() =>
  import("disqus-react").then((mod) => ({ default: mod.CommentCount }))
);

interface Props {
  postTitle: string;
  postSlug: string;
}

const CommentCount: React.FC<Props> = ({ postTitle, postSlug }: Props) => {
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
        <Suspense fallback={<span>...</span>}>
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
        </Suspense>
      )}
    </>
  );
};

export default CommentCount;
