import type { JSX, ParentComponent } from "solid-js";
import type { GlassVariants } from "../../legacy/src/types";
import { Typography, type TypographyProps } from "./Typography";

interface CardProps extends JSX.DetailsHtmlAttributes<HTMLDivElement> {
  variant?: GlassVariants;
  growOnHover?: boolean;
}

export const Card: ParentComponent<CardProps> = ({ children, variant = "thick", growOnHover, ...props }) => {
  let classes = "p-6 border border-gray-200 rounded-lg dark:border-gray-700";

  switch (variant) {
    case "transparant":
      classes += ` !border-2`;
      break;
    default:
      classes += variant === "default" ? " glass" : ` glass-${variant}`;
      classes += ` bg-white shadow dark:bg-gray-800`;
      break;
  }

  if (growOnHover) classes += ` lg:transition lg:duration-500 lg:hover:scale-105`;

  if (props.class) classes += ` ${props.class}`;

  return (
    <div {...props} class={classes}>
      {children}
    </div>
  );
};

export const CardHeader: ParentComponent<TypographyProps> = ({ children, variant = "h5", ...props }) => {
  let classes = "py-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pb-6";
  if (props.class) classes += ` ${props.class}`;
  return (
    <Typography variant={variant} class={classes}>
      {children}
    </Typography>
  );
};

export const CardContent: ParentComponent<JSX.DetailsHtmlAttributes<HTMLDivElement>> = (props) => {
  let classes = "flex-grow";
  if (props.class) classes += ` ${props.class}`;
  return <div class={classes}>{props.children}</div>;
};

export const CardActions: ParentComponent<JSX.DetailsHtmlAttributes<HTMLDivElement>> = (props) => {
  let classes = "flex items-end justify-end pt-6";
  if (props.class) classes += ` ${props.class}`;
  return <div class="flex items-end justify-end pt-6">{props.children}</div>;
};
