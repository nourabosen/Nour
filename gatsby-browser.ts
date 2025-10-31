import { GatsbyBrowser } from "gatsby";
import "./src/assets/scss/main.scss";
export { wrapRootElement } from "./internal/gatsby/wrap-root-element";

export const onRouteUpdate: GatsbyBrowser["onRouteUpdate"] = ({
  location,
  prevLocation,
}) => {
  if (prevLocation) {
    window.scrollTo(0, 0);
  }
};

export const onInitialClientRender = () => {
  window.history.scrollRestoration = "manual";
};
