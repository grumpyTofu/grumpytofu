import React from "react";
// import type { GlassVariants } from "../types";
// import styles from './section.module.scss';
import { GlassVariants } from "@portfolio/types";

export interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[];
  id: string;
  dark?: boolean;
  variant?: GlassVariants;
  wrapperClasses?: string;
}

export const Section = ({ children, id, className, dark = false, variant = "default", wrapperClasses, ...props }: SectionProps) => {
  let sectionClasses = "min-h-[80vh] flex items-center";

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

  return (
    <section {...props} id={id} className={sectionClasses}>
      <div className={`${wrapperClasses} block w-full px-12`}>{children}</div>
    </section>
  );
};
