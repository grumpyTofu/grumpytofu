import React, { useEffect, useRef, useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { useMediaQueries } from "./MediaQueriesProvider";
import clsx from "clsx";
import Navbar from "./Navbar";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const queries = useMediaQueries();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (queries.mdUp === true && open !== true) {
      setOpen(true);
    } else if (queries.mdDown === true && open === true) {
      setOpen(false);
    }
  }, [queries.mdUp, queries.mdDown]);

  const toggleSidebar = () => {
    console.log(!open);
    setOpen(!open);
  };

  return (
    <>
      {/* // <!-- navbar goes here --> */}
      <Navbar />
      {/* // <!-- content goes here --> */}
      <div className="relative min-h-screen flex">
        <main className="bg-white dark:bg-black flex-1 p-10 text-2xl font-bold">{children}</main>
      </div>
    </>
  );
};

export default Layout;
