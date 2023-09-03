/// <reference types="astro/client" />

export declare global {
  interface Window {
    grecaptcha: any;
    dataLayer: any[] | undefined;
    gtag: any;
  }
}
