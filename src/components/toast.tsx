import React, { useContext } from "react";
import Image from "next/image";

export interface Toast {
  id: number;
  variant: "message" | "success" | "warning" | "error";
  message: string;
}

interface ToastState {
  toasts: Toast[];
  createToast: (toast: Toast) => void;
}

export class ToastError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export const ToastContext = React.createContext<ToastState>({ toasts: [], createToast: () => ({}) });

export const Toast = ({ message, variant = "message" }: Toast) => {
  const icon = `/icons/${variant}.svg`;

  let iconWrapperClasses: string;

  switch (variant) {
    case "success":
      iconWrapperClasses =
        "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200";
      break;
    case "warning":
      iconWrapperClasses =
        "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200";
      break;
    case "error":
      iconWrapperClasses =
        "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200";
      break;
    default:
      iconWrapperClasses =
        "inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-600 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200";
  }

  return (
    <div
      className="my-3 glass-light flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x"
      role="alert"
    >
      <div className={iconWrapperClasses}>
        <Image src={icon} height={24} width={24} alt={`${variant} icon`} />
      </div>
      <div className="pl-4 text-sm font-normal">{message}</div>
    </div>
  );
};

const ToastContainer = () => {
  const { toasts } = useContext(ToastContext);
  return (
    <div className="fixed bottom-10 right-10 z-50">
      {toasts.map((toast, i) => (
        <Toast {...toast} key={`toast_${toast.id}`} />
      ))}
    </div>
  );
};

export default ToastContainer;
