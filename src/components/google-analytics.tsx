"use client";

import Script from "next/script";
import { Suspense } from "react";

export const GoogleAnalytics = () => {
  const gtag = (...args: any) => {
    if (window.dataLayer) window.dataLayer.push(args);
  };

  return (
    <Suspense fallback={<></>}>
      <Script
        async
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-428LF2BSVJ"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];

          gtag("js", new Date());
          gtag("config", "G-428LF2BSVJ");
        }}
      ></Script>
    </Suspense>
  );
};

export default GoogleAnalytics;