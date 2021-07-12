import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    console.log(!open);
    setOpen(!open);
  };
  return (
    <nav className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link href="">
                <a href="#" className="flex items-center py-5 px-2">
                  <span className="font-bold hover:text-white">GrumpyTofu</span>
                </a>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Features
              </a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Pricing
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="" className="py-5 px-3">
              Login
            </a>
            <a href="" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">
              Signup
            </a>
          </div>

          {/* <!-- mobile button goes here --> */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button focus:outline-none hover:text-white" onClick={toggleMenu}>
              <MenuIcon className="h-6" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="mobile-menu md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-600">
            Features
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-600">
            Pricing
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
