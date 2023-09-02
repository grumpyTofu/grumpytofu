import { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface TextFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  label: string;
  error?: string | null;
  rows?: number;
}

const TextField = ({ id, label, error, className, type = "text", placeholder = "placeholder", rows = 1, ...props }: TextFieldProps) => {
  let labelClasses = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  let inputClasses =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  let helperTextClasses = "mt-2 text-sm text-gray-500 dark:text-gray-400";

  if (error) {
    labelClasses = "block mb-2 text-sm font-medium text-red-700 dark:text-red-500";
    inputClasses =
      "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500";
    helperTextClasses = "mt-2 text-sm text-red-600 dark:text-red-500";
  }

  if (rows > 1) {
    inputClasses =
      "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  }

  return (
    <div className={className}>
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {rows > 1 ? (
        <textarea
          id={id}
          rows={rows}
          className={inputClasses}
          placeholder={placeholder}
          {...(props as DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>)}
        ></textarea>
      ) : (
        <input type={type} id={id} className={inputClasses} placeholder={placeholder} {...props} />
      )}
      <p className={helperTextClasses}>{error}</p>
    </div>
  );
};

export default TextField;
