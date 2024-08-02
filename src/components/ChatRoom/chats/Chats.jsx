import SearchBar from "@/components/SearchBar";
import React from "react";
import ChatList from "@/components/ChatRoom/chatList/ChatList";

const Chats = () => {
  return (
    <>
      <div className="w-[23%] flex flex-col items-center min-h-[90vh] relative border-r-[1px] border-gray-700">
        <div className="fixed w-[21%] p-2 border-b-[1px] border-gray-800 z-20">
          <SearchBar />
        </div>
        <div className="m-14 w-full p-2">
          <ChatList />
        </div>
      </div>
    </>
  );
};

export default Chats;
