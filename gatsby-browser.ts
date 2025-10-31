import "./src/assets/scss/main.scss";
export { wrapRootElement } from "./internal/gatsby/wrap-root-element";

export const onRouteUpdate = () => {
  window.scrollTo(0, 0);
};
