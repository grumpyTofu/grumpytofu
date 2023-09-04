import clsx from 'clsx';
import { Show } from 'solid-js';

type InputLabelProps = {
  name: string;
  label?: string;
  required?: boolean;
  margin?: 'none';
  error?: boolean;
};

/**
 * Input label for a form field.
 */
export function InputLabel(props: InputLabelProps) {
  return (
    <Show when={props.label}>
      <label
        class={clsx(
          'block mb-2 text-sm font-medium pb-1',
          props.error ? 'text-red-500 dark:text-red-400' : 'text-gray-900 dark:text-white'
        )}
        for={props.name}
      >
        {props.label} {props.required && <span class="text-red-600 dark:text-red-400">*</span>}
      </label>
    </Show>
  );
}
