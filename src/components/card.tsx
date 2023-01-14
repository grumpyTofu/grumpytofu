import React from "react";
import type { GlassVariants } from "@portfolio/types";

interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode;
  variant?: GlassVariants;
}

export const Card = ({ children, variant = "thick", className, ...props }: CardProps) => {
  let classes = "rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10";
  classes += variant === "default" ? " glass" : ` glass-${variant}`;
  if (className) classes += ` ${className}`;
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};
