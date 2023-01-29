import "./globals.css";
import Footer from "@portfolio/components/footer";
import ForceScroll from "@portfolio/components/forceScroll";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ForceScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
