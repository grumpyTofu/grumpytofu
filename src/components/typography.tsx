import type { JSX, ParentComponent } from 'solid-js';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface TypographyProps extends JSX.DetailsHtmlAttributes<HTMLHeadingElement> {
  variant?: TypographyVariant;
}

export const Typography: ParentComponent<TypographyProps> = (props) => {
  let classes = 'tracking-tight';

  if (props.class) {
    classes += ` ${props.class}`;
  }

  switch (props.variant) {
    case 'h1':
      return (
        <h1 {...props} class={`text-4xl sm:text-5xl ${classes}`}>
          {props.children}
        </h1>
      );
    case 'h2':
      return (
        <h2 {...props} class={`text-3xl sm:text-4xl ${classes}`}>
          {props.children}
        </h2>
      );
    case 'h3':
      return (
        <h3 {...props} class={`text-2xl sm:text-3xl ${classes}`}>
          {props.children}
        </h3>
      );
    case 'h4':
      return (
        <h4 {...props} class={`text-xl sm:text-2xl ${classes}`}>
          {props.children}
        </h4>
      );
    case 'h5':
      return (
        <h5 {...props} class={`text-lg sm:text-xl ${classes}`}>
          {props.children}
        </h5>
      );
    case 'h6':
      return (
        <h6 {...props} class={`text-md sm:text-lg ${classes}`}>
          {props.children}
        </h6>
      );
    default:
      return (
        <p {...props} class={classes}>
          {props.children}
        </p>
      );
  }
};
