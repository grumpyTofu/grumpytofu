import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import About from "./about";
import Contact from "./contact";
import Services from "./services";
import Showcase from "./showcase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Services />
      <Showcase />
      <Contact />
    </main>
  );
}
