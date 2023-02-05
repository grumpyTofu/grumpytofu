"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { Suspense, useEffect, useState } from "react";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

class Gtag {
  // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
  static pageview(url: string) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }

  // https://developers.google.com/analytics/devguides/collection/gtagjs/events
  static event({ action, category, label, value }: any) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export const GoogleAnalytics = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const pathname = usePathname();

  const handleRouteChange = (pathname: string) => {
    Gtag.pageview(pathname);
  };

  useEffect(() => {
    if (loaded) handleRouteChange(pathname || "");
  }, [loaded, pathname]);

  return (
    <Suspense fallback={<></>}>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
        onLoad={() => setLoaded(true)}
      />
    </Suspense>
  );
};

export default GoogleAnalytics;
