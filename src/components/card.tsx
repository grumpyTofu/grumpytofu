import React from "react";
import type { GlassVariants } from "@portfolio/types";
import { Typography, TypographyProps } from "./typography";

interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode;
  variant?: GlassVariants;
}

export const Card = ({ children, variant = "thick", className, ...props }: CardProps) => {
  let classes = "max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";
  classes += variant === "default" ? " glass" : ` glass-${variant}`;
  if (className) classes += ` ${className}`;
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
};

interface CardHeaderProps extends TypographyProps {
  children: React.ReactNode;
}
export const CardHeader = ({ children, className, variant = "h5" }: CardHeaderProps) => {
  let classes = "py-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-6";
  if (className) classes += ` ${className}`;
  return (
    <Typography variant={variant} className={classes}>
      {children}
    </Typography>
  );
};

interface CardContentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}
export const CardContent = ({ children, className }: CardContentProps) => {
  let classes = "flex-grow";
  if (className) classes += ` ${className}`;
  return <div className={classes}>{children}</div>;
};

interface CardActionsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}
export const CardActions = ({ children, className }: CardActionsProps) => {
  let classes = "flex items-end justify-end pt-6";
  if (className) classes += ` ${className}`;
  return <div className="flex items-end justify-end pt-6">{children}</div>;
};
