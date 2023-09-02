import { ReactElement } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export interface LinkProps extends NextLinkProps {
  children: ReactElement | string;
  external?: boolean;
  className?: string;
}

export const Link = ({ children, external, className, ...props }: LinkProps) => {
  if (external) {
    Object.assign(props, { target: "_blank", rel: "noreferrer" });
  }

  if (className) {
    className += " mt-6 sm:mt-3 md:mt-0 z-50";
  }

  return (
    <NextLink className={className} {...props}>
      {children}
    </NextLink>
  );
};
