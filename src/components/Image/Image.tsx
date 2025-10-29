import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface Props {
  alt: string;
  className?: string;
  path: string;
}

const Image: React.FC<Props> = ({ alt, className, path }: Props) => {
  const image = getImage(path);

  return image ? (
    <GatsbyImage image={image} alt={alt} className={className} />
  ) : null;
};

export default Image;
