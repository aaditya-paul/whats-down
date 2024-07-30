import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-screen bg-gray-900 p-3 border-b-slate-800 border-b-[1px]">
      <ul className="flex flex-row justify-between items-center">
        <li>
          <Link href={"/"}>
            <h1 className="text-xl font-bold">WhatsDown</h1>
          </Link>
        </li>
        <li className="min-w-[35%] m-2">
          {/* searchbar and profile section after login */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
