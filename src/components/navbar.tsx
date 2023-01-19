import Link from "next/link";
import { Bars3Icon as MenuIcon } from "@heroicons/react/24/outline";

const Navbar = () => (
  <nav className="fixed top-0 flex w-full p-6 glass-thick z-30">
    <div>
      <Link href="/">GrumpyTofu</Link>
    </div>
    <div className="flex-grow"></div>
    <div>
      <MenuIcon height={24} />
    </div>
  </nav>
);

export default Navbar;
