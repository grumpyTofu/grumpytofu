import "./globals.css";
import Footer from "@portfolio/components/footer";
import ForceScroll from "@portfolio/components/forceScroll";
import Background from "@portfolio/components/background";
import GoogleAnalytics from "@portfolio/components/google-analytics";
import { AnalyticsWrapper } from "@portfolio/components/Analytics";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>GrumpyTofu</title>
      </head>
      <body>
        <AnalyticsWrapper />
        <GoogleAnalytics />
        <Background />
        <ForceScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
