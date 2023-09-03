import { FormError, type SubmitHandler } from '@modular-forms/solid';
import { ToastError, createToast, setLoading, setToken, toasts, token } from '../../store';

const grecaptchaKeyId = import.meta.env.PUBLIC_GRECAPTCHA_KEY_ID;

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export const submitContactForm: SubmitHandler<ContactForm> = async (values) => {
  setLoading(true);
  const nextToastId = toasts.length;

  try {
    const authorization = token();
    if (!authorization) {
      throw new Error('Captcha failed to load. Please refresh and try again.');
    }

    const response = await fetch('api/contact', {
      method: 'POST',
      headers: { authorization },
      body: JSON.stringify(values),
    });

    if (response.status !== 200) {
      const result = await response.json();
      if (result.type && result.type === 'toast-error' && result.message)
        throw new ToastError(result.message);
      throw result;
    }
  } catch (error) {
    if (!error || typeof error !== 'object') {
      createToast({
        id: nextToastId,
        variant: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      });
      return;
    } else if (error instanceof ToastError) {
      createToast({ id: nextToastId, variant: 'error', message: error.message });
      return;
    }

    createToast({
      id: nextToastId,
      variant: 'error',
      message: 'Something went wrong. Pleast try again!',
    });
    throw new FormError<ContactForm>('An error has occurred.', error);
  } finally {
    try {
      const newToken = await window.grecaptcha.enterprise.execute(grecaptchaKeyId, {
        action: 'login',
      });
      setToken(newToken);
    } catch (error) {
      createToast({
        id: toasts.length,
        variant: 'error',
        message: 'Captcha failed to load. Please refresh and try again.',
      });
    }
    setLoading(false);
  }
};
