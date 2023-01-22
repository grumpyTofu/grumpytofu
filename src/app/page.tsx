import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import About from "./about";
import Contact from "./contact";
import Services from "./services";
import Showcase from "./showcase";
import Navbar from "@portfolio/components/navbar";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <About />
        <Services />
        <Showcase />
        <Contact />
      </main>
    </>
  );
}
