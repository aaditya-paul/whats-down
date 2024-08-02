import React from "react";
import userSubNavbar from "../userSubNavbar/userSubNavbar";
import moreIcon from "@/../public/assests/icons/MoreIconActivated.svg";
import Image from "next/image";
import dp from "@/app/favicon.ico";
import DisplayChatMessages from "../displayChatMessages/displayChatMessages";
const ChatMessages = () => {
  return (
    <>
      <div className="w-[77%]">
        <div className="subnavbar flex flex-row justify-between items-center fixed w-[76%] top-20 p-1 border-b-slate-800 border-b-[1px] z-50">
          <div className="flex flex-row items-center gap-">
            <div className="relative w-8 h-8 mx-2">
              <Image fill src={dp} alt="" />
            </div>
            <div>
              <h1 className="text-lg font-semibold mx-2">WhatsDown</h1>
            </div>
          </div>
          <div className="relative w-5 h-5 cursor-pointer rotate-90 bg-gray-800 rounded-md p-3">
            <img src={moreIcon} alt="more-icon" />
          </div>
        </div>
        <div className="mt-10">
          <DisplayChatMessages />
        </div>
      </div>
    </>
  );
};

export default ChatMessages;
