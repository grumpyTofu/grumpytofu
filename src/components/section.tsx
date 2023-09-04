import type { JSX, ParentComponent } from 'solid-js';
import type { GlassVariants } from '../../legacy/src/types';

export interface SectionProps extends JSX.DetailsHtmlAttributes<HTMLElement> {
  id: string;
  dark?: boolean;
  variant?: GlassVariants;
  wrapperClasses?: string;
}

export const Section: ParentComponent<SectionProps> = ({
  children,
  id,
  dark = false,
  variant = 'default',
  wrapperClasses,
  ...props
}: SectionProps) => {
  let sectionClasses = 'min-h-[80vh] flex items-center relative';

  switch (variant) {
    case 'transparant':
      break;
    case 'default':
      sectionClasses += ' glass';
      break;
    default:
      sectionClasses += ` glass-${variant}`;
  }

  if (props.class) sectionClasses += ` ${props.class}`;

  let wrapperClassName = 'block w-full px-12';
  if (wrapperClasses) wrapperClassName += ` ${wrapperClasses}`;

  return (
    <section {...props} id={id} class={sectionClasses}>
      <div class={wrapperClassName}>{children}</div>
    </section>
  );
};
