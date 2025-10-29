import React from "react";

import cn from "classnames";
import { Link } from "gatsby";

import * as styles from "./Button.module.scss";

interface Props {
  className?: string;
  children: React.ReactNode;
  to: string;
}

const Button: React.FC<Props> = ({ className, children, to }: Props) => (
  <Link className={cn(styles.button, className)} to={to}>
    {children}
  </Link>
);

export default Button;
