"use client";
import Link from "next/link";
import React from "react";
import ProfileIcon from "./ProfileIcon";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebaseConfig";
import Image from "next/image";
//icons
import Notification from "@/../public/assests/icons/notification-bell.svg";
import Search from "@/../public/assests/icons/search.svg";
//components
import SearchBar from "./SearchBar";
import SignOutButton from "./SignOutButton";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="fixed top-0 w-screen bg-gray-900 p-3 border-b-slate-800 border-b-[1px] z-50">
      <ul className="flex flex-row justify-between items-center">
        <li>
          <Link href={"/"}>
            <h1 className="text-xl font-bold mx-4">WhatsDown</h1>
          </Link>
        </li>
        <li className="min-w-[20%] m-1 flex justify-between">
          {/* <SearchBar /> */}
          {user && (
            <>
              <div className="flex gap-4">
                <button className="notificationbtn bg-gray-800 hover:bg-gray-700 transition-all p-2 rounded-lg">
                  <div className="relative w-5 h-5 ">
                    <Image
                      fill
                      src={Search}
                      alt="notification-bell-icon"
                    />
                  </div>
                </button>
                <button className="notificationbtn bg-gray-800 hover:bg-gray-700 transition-all p-2 rounded-lg">
                  <div className="relative w-5 h-5 ">
                    <Image
                      fill
                      src={Notification}
                      alt="notification-bell-icon"
                    />
                  </div>
                </button>
                <ProfileIcon />
              </div>
              <div>
                <SignOutButton />
              </div>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
