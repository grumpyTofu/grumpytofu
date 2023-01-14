type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

interface TypographyProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  variant?: TypographyVariant;
  children?: React.ReactNode;
}

export const Typography = ({ variant, children, className = "", ...props }: TypographyProps) => {
  let classes = "font-extrabold tracking-tight text-gray-900 dark:text-white-500";
  if (className) classes += ` ${className}`;
  switch (variant) {
    case "h1":
      return (
        <h1 {...props} className={`text-4xl sm:text-5xl ${classes}`}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 {...props} className={`text-3xl sm:text-4xl ${classes}`}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 {...props} className={`text-2xl sm:text-3xl ${classes}`}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 {...props} className={`text-xl sm:text-2xl ${classes}`}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 {...props} className={`text-lg sm:text-xl ${classes}`}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 {...props} className={`text-md sm:text-lg ${classes}`}>
          {children}
        </h6>
      );
    default:
      return (
        <p {...props} className={classes}>
          {children}
        </p>
      );
  }
};
