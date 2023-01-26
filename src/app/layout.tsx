import "./globals.css";
import Footer from "@portfolio/components/footer";
import { DataService } from "@portfolio/services/data.service";
import { useQuery } from "react-query";
import { use } from "react";

const initDb = async () => {
  const dataService = new DataService();
  await dataService.init();
  return dataService;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  use(initDb());

  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
