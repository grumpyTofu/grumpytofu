import React from "react";
import Image from "next/image";
import Navbar from "../../src/components/navbar";
import Footer from "./Footer";
import grumpyTofu from "../public/grumpytofu.webp";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />

      {/* <!--Main--> */}
      <div className="pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {/* <!--Left Col--> */}
        {children}

        {/* <!--Right Col--> */}
        <div className="w-full p-12 overflow-hidden md:flex md: justify-center md:align-middle">
          <div className="mx-auto w-full sm:4/5 md:w-3/5 lg:w-2/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6">
            <Image src={grumpyTofu} alt="GrumpyTofu" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
