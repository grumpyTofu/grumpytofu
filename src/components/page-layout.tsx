import React from "react";
import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";
// import grumpyTofu from "../public/grumpytofu.webp";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
