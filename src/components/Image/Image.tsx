import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  image: IGatsbyImageData;
  alt: string;
}

const Image: React.FC<Props> = ({ image, alt }) => (
  <GatsbyImage image={image} alt={alt} />
);

export default Image;
