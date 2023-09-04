import { createStore } from 'solid-js/store';

export class ToastError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export interface Toast {
  id: number;
  variant: 'message' | 'success' | 'warning' | 'error';
  message: string;
}

export const [toasts, setToasts] = createStore<Toast[]>([]);

export const removeToast = (id: number) => {
  setToasts(toasts.filter((toast) => toast.id !== id));
};

export const createToast = (toast: Toast) => {
  setToasts([...toasts, toast]);
  setTimeout(() => removeToast(toast.id), 2000);
};
