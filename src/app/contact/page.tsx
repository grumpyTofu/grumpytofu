"use client";

import { Suspense, useEffect, useState } from "react";
import { Section } from "@portfolio/components";
import ToastContainer, { Toast, ToastContext } from "@portfolio/components/toast";
import ContactForm from "./form";
import Script from "next/script";
// import Script from "next/script";

export default function Contact() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const createToast = (toast: Toast) => {
    setToasts([...toasts, toast]);
    setTimeout(() => setToasts(toasts.filter((t) => t.id !== toast.id)), 2000);
  };

  const [token, setToken] = useState<string | undefined>();

  const grecaptchaKeyId = process.env.NEXT_PUBLIC_GRECAPTCHA_KEY_ID;

  return (
    <ToastContext.Provider value={{ toasts, createToast }}>
      <Section id="contact" wrapperClasses="mt-12">
        <ContactForm token={token} />
      </Section>
      <ToastContainer />
      <Suspense fallback={<></>}>
        <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${grecaptchaKeyId}`}
          onLoad={() => {
            window.grecaptcha.enterprise.ready(async function () {
              const token = await window.grecaptcha.enterprise.execute(grecaptchaKeyId, { action: "login" });
              console.log(token);
              setToken(token);
            });
          }}
        ></Script>
      </Suspense>
    </ToastContext.Provider>
  );
}
