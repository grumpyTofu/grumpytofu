import type { Toast as IToast } from '../../store';

export const Toast = ({ message, variant = 'message' }: IToast) => {
  const icon = `/icons/${variant}.svg`;

  let iconWrapperClasses: string;

  switch (variant) {
    case 'success':
      iconWrapperClasses =
        'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200';
      break;
    case 'warning':
      iconWrapperClasses =
        'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200';
      break;
    case 'error':
      iconWrapperClasses =
        'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200';
      break;
    default:
      iconWrapperClasses =
        'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-600 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200';
  }

  return (
    <div
      class="my-3 glass-light flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x"
      role="alert"
    >
      <div class={iconWrapperClasses}>
        <img src={icon} height={24} width={24} alt={`${variant} icon`} />
      </div>
      <div class="pl-4 text-sm font-normal">{message}</div>
    </div>
  );
};
