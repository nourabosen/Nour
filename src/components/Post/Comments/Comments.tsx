import React, { useState, useEffect, lazy, Suspense } from "react";

const DisqusComments = lazy(() => import("./DisqusComments"));

interface Props {
  postTitle: string;
  postSlug: string;
}

const Comments: React.FC<Props> = ({ postTitle, postSlug }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Suspense fallback={<div>Loading comments...</div>}>
          <DisqusComments postTitle={postTitle} postSlug={postSlug} />
        </Suspense>
      )}
    </>
  );
};

export default Comments;
