import React from "react";
import { GlassVariants } from "@portfolio/types";

export interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[];
  id: string;
  dark?: boolean;
  variant?: GlassVariants;
  wrapperClasses?: string;
}

export const Section = ({ children, id, className, dark = false, variant = "default", wrapperClasses, ...props }: SectionProps) => {
  let sectionClasses = "min-h-[80vh] flex items-center relative";

  switch (variant) {
    case "transparant":
      break;
    case "default":
      sectionClasses += " glass";
      break;
    default:
      sectionClasses += ` glass-${variant}`;
  }

  if (className) sectionClasses += ` ${className}`;

  let wrapperClassName = "block w-full px-12";
  if (wrapperClasses) wrapperClassName += ` ${wrapperClasses}`;

  return (
    <section {...props} id={id} className={sectionClasses}>
      <div className={wrapperClassName}>{children}</div>
    </section>
  );
};
