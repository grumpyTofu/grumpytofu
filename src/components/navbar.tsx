"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

import { Bars3Icon as MenuIcon } from "@heroicons/react/24/outline";
import { LoadingSpinner, LoadingSpinnerContext } from "./spinner";

const Navbar = () => {
  const { loading } = useContext(LoadingSpinnerContext);
  const pathname = usePathname();
  // : <MenuIcon height={24} width={24} />}
  return (
    <nav className="fixed top-0 flex w-full p-6 glass-thick z-30">
      <div>{pathname === "contact" ? <Link href="/">GrumpyTofu</Link> : <a href="/">GrumpyTofu</a>}</div>
      <div className="flex-grow"></div>
      <div>{loading && <LoadingSpinner />}</div>
    </nav>
  );
};

export default Navbar;
