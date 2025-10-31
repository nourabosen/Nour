import React from "react";

import { WrapRootElementBrowserArgs } from "gatsby";

const wrapRootElement = ({
  element,
}: WrapRootElementBrowserArgs): React.ReactElement => <>{element}</>;

export { wrapRootElement };
