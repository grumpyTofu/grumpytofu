"use client";

import { Suspense, useContext, createContext, useState } from "react";
import { Section } from "@portfolio/components";
import ToastContainer, { Toast, ToastContext } from "@portfolio/components/toast";
import ContactForm from "./form";
import Script from "next/script";
import { LoadingSpinnerContext } from "@portfolio/components/spinner";
import { GrecaptchaContext, GrecaptchaState } from "@portfolio/components/grecaptcha";

export default function Contact() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const createToast = (toast: Toast) => {
    setToasts([...toasts, toast]);
    setTimeout(() => setToasts(toasts.filter((t) => t.id !== toast.id)), 2000);
  };

  const [grecaptchaState, setGrecaptchaState] = useState<GrecaptchaState>({
    grecaptcha: {},
    setToken: () => {},
  });

  const [token, setToken] = useState<string | undefined>();

  const handleSetToken = (token: string) => setToken(token);

  const grecaptchaKeyId = process.env.NEXT_PUBLIC_GRECAPTCHA_KEY_ID;

  const { startLoading, stopLoading } = useContext(LoadingSpinnerContext);

  return (
    <GrecaptchaContext.Provider value={{ ...grecaptchaState, grecaptchaKeyId, setToken: handleSetToken, token }}>
      <ToastContext.Provider value={{ toasts, createToast }}>
        <Section id="contact" wrapperClasses="mt-12">
          <ContactForm />
        </Section>
        <ToastContainer />
        <Suspense fallback={<></>}>
          <Script
            src={`https://www.google.com/recaptcha/enterprise.js?render=${grecaptchaKeyId}`}
            strategy="lazyOnload"
            onLoad={() => {
              window.grecaptcha.enterprise.ready(async function () {
                startLoading();
                try {
                  const initialToken = await window.grecaptcha.enterprise.execute(grecaptchaKeyId, { action: "login" });
                  handleSetToken(initialToken);
                  setGrecaptchaState({
                    grecaptcha: window.grecaptcha,
                    setToken: handleSetToken,
                  });
                } catch (error) {
                  createToast({ id: toasts.length, message: "Captcha failed to load. Please refresh and try again.", variant: "error" });
                } finally {
                  stopLoading();
                }
              });
            }}
          ></Script>
        </Suspense>
      </ToastContext.Provider>
    </GrecaptchaContext.Provider>
  );
}
