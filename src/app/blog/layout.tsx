import React from "react";
import Navbar from "@portfolio/components/navbar";

const Services = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="mt-[4rem]">{children}</div>
    </>
  );
};

export default Services;
