"use client";
import Link from "next/link";
import React from "react";
import ProfileIcon from "./ProfileIcon";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebaseConfig";
import Image from "next/image";
//icons
import Notification from "@/../public/assests/icons/notification-bell.svg";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="fixed top-0 w-screen bg-gray-900 p-3 border-b-slate-800 border-b-[1px]">
      <ul className="flex flex-row justify-between items-center">
        <li>
          <Link href={"/"}>
            <h1 className="text-xl font-bold">WhatsDown</h1>
          </Link>
        </li>
        <li className="min-w-[35%] m-1 flex justify-end">
          {/* <SearchBar /> */}
          {user && (
            <>
              <div className="flex gap-4">
                <SearchBar />
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
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
