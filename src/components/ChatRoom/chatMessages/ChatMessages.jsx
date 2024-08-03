import React, { useState } from "react";
import userSubNavbar from "../userSubNavbar/userSubNavbar";
import moreIcon from "@/../public/assests/icons/MoreIconActivated.svg";
import Image from "next/image";
import dp from "@/app/favicon.ico";
import DisplayChatMessages from "../displayChatMessages/displayChatMessages";
const ChatMessages = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [messagesArray, setMessagesArray] = useState([
    {
      type: "sent",
      text: "hello i am ksnuasbdbyddddddddddddddddddddddddddd",
      time: "21:08",
    },
    {
      type: "received",
      text: "hello0000000000000000000000000000000ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd0000000",
      time: "21:08",
    },
    {
      type: "received",
      text: "hello",
      time: "21:08",
    },
    {
      type: "sent",
      text: "hello",
      time: "21:08",
    },
  ]);
  
  var currentdate = new Date();
  console.log(currentdate);
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    "  " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes();
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
          <DisplayChatMessages messagesArray={messagesArray} />
        </div>
        <div className="inputMessage flex items-center gap-3 fixed w-full bottom-0 p-2 border-t-slate-700 border-t-[1px] z-50">
          <div className="flex justify-center items-center m-2 font-light text-3xl text-center text-gray-500 cursor-pointer">
            +
          </div>
          <div className="flex justify-center items-center m-2 cursor-pointer">
            😊
          </div>
          <div className="bg-gray-800 flex items-end gap-1 w-[70%] rounded-md">
            <textarea
              type="text"
              placeholder="Type a message"
              className="w-full m-1 resize-none py-auto my-auto overflow-auto bg-transparent p-2 outline-none text-white max-h-28 text-wrap flex-wrap text-sm break-all  "
              value={inputMessage}
              onChange={(e) => {
                setInputMessage(e.target.value);
              }}
            />

            <button
              className="text-sm bg-blue-500 p-2 px-4 m-2 rounded-lg hover:bg-blue-600 transition-all"
              onClick={() => {
                setMessagesArray((e) => [
                  ...e,
                  { type: "sent", text: inputMessage, time: datetime },
                ]);
                setInputMessage("");
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMessages;
