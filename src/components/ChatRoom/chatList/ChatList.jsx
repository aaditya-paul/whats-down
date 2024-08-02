import React from "react";

const ChatFriends = () => {
  const chatsArray = [
    {
      username: "Ramesh",
      lastMessage: "Hellooooooooooooooooooooooooooooooooooo",
      lastDate: "2021-09-01",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center w-full">
        {chatsArray.map((chat) => (
          <div className="w-full flex justify-between p-2 border-b-[1px] hover:bg-gray-800 transition-all border-gray-800 cursor-pointer">
            <div className="flex items-center gap-2 ">
              <div className="w-10 h-10 bg-gray-700 rounded-full mx-1"></div>
              <div>
                <h1 className="text-white">{chat.username}</h1>
                <p className="text-gray-500 text-sm text-">
                  {chat.lastMessage.length > 24
                    ? chat.lastMessage.slice(0, 24) + "..."
                    : chat.lastMessage}
                </p>
              </div>
            </div>
            <div className="text-gray-500 text-xs">Last date</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatFriends;
