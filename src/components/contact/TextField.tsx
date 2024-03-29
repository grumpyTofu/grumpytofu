import clsx from 'clsx';
import { createMemo, type JSX, splitProps, type Component, Switch, Match, Show } from 'solid-js';
import { InputError } from '../InputError';
import { InputLabel } from '../InputLabel';

type TextInputProps = {
  ref: (element: HTMLInputElement) => void;
  type: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number' | 'date';
  name: string;
  value: string | number | undefined;
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
  onChange: JSX.EventHandler<HTMLInputElement, Event>;
  onBlur: JSX.EventHandler<HTMLInputElement, FocusEvent>;
  placeholder?: string;
  required?: boolean;
  class?: string;
  label?: string;
  error?: string;
  padding?: 'none';
  rows?: number;
};

/**
 * Text input field that users can type into. Various decorations can be
 * displayed in or around the field to communicate the entry requirements.
 */
export function TextField(props: TextInputProps) {
  // Split input element props
  const [, inputProps] = splitProps(props, ['class', 'value', 'label', 'error', 'padding']);

  // Create memoized value
  const getValue = createMemo<string | number | undefined>(
    (prevValue) =>
      props.value === undefined ? '' : !Number.isNaN(props.value) ? props.value : prevValue,
    ''
  );

  return (
    <div class={clsx(!props.padding)}>
      <InputLabel
        name={props.name}
        label={props.label}
        required={props.required}
        error={!!props.error}
      />
      <Show
        when={props.rows && props.rows > 1}
        fallback={
          <input
            {...inputProps}
            class={clsx(
              props.class,
              'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white',
              props.error
                ? 'border-red-600/50 dark:border-red-400/50 focus:ring-red-600/50 dark:focus:ring-red-400/50'
                : 'border-slate-200 hover:border-slate-300 focus:border-sky-600/50 dark:border-slate-800 dark:hover:border-slate-700 dark:focus:border-sky-400/50'
            )}
            id={props.name}
            value={getValue()}
            aria-invalid={!!props.error}
            aria-errormessage={`${props.name}-error`}
          />
        }
      >
        <textarea
          {...(inputProps as any)}
          rows={props.rows}
          class={clsx(
            props.class,
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
            props.error
              ? 'border-red-600/50 dark:border-red-400/50'
              : 'border-slate-200 hover:border-slate-300 focus:border-sky-600/50 dark:border-slate-800 dark:hover:border-slate-700 dark:focus:border-sky-400/50'
          )}
          placeholder={props.placeholder}
          value={getValue()}
          aria-invalid={!!props.error}
          aria-errormessage={`${props.name}-error`}
        ></textarea>
      </Show>
      <InputError name={props.name} error={props.error} />
    </div>
  );
}
