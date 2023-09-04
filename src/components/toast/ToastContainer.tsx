import { For } from 'solid-js';
import { toasts } from '../../store';
import { Toast } from './Toast';

export const ToastContainer = () => (
  <div class="fixed bottom-10 left-10 z-50">
    <For each={toasts}>{(toast) => <Toast {...toast} />}</For>
  </div>
);
