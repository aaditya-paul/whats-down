import React from "react";
import Chats from "./chats/Chats";
import ChatMessages from "./chatMessages/ChatMessages";

const ChatRoom = () => {
  return (
    <>
      <div className="flex flex-row w-full fixed mt-20 flex-1">
        <Chats />
        <ChatMessages />
      </div>
    </>
  );
};

export default ChatRoom;
