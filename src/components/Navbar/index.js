import * as React from "react";
import { Link } from "react-router-dom";
import HiMenuAlt3 from "@meronex/icons/hi/HiMenuAlt3";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-14 bg-black shadow-lg rounded-lg bg-opacity-5 backdrop-filter backdrop-blur-md
      fixed w-full font-sans text-cust-cyan border-0"
    >
      <Link to="/" className="pl-8 flex flex-row">
        <div className="h-10 w-10 self-center mr-2">
          <img className="h-10 w-10 self-center" src="" alt="foto" />
        </div>
        <div className="self-center">
          <h3  className="text-lg font-bold">
            Andre William
          </h3>
        </div>
      </Link>

      <div className="px-4 cursor-pointer md:hidden">
        <HiMenuAlt3 className="w-7 h-7 text-cust-cyan" />
      </div>

      <div className="pr-8 md:block hidden">
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to="/" className="p-4">
          Skills
        </Link>
        <Link to="/" className="p-4">
          Project
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
