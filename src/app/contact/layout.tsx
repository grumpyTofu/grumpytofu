"use client";

import Navbar from "@portfolio/components/navbar";
import { LoadingSpinnerContext } from "@portfolio/components/spinner";
import { useState } from "react";

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false);

  const startLoading = () => setLoading(true);

  const stopLoading = () => setLoading(false);

  return (
    <LoadingSpinnerContext.Provider value={{ loading, startLoading, stopLoading }}>
      <Navbar />
      {children}
    </LoadingSpinnerContext.Provider>
  );
}
