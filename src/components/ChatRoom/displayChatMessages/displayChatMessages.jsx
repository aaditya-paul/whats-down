import React, { useState } from "react";


const DisplayChatMessages = ({messagesArray}) => {
  
  return (
    <>
      <div>
        {messagesArray.map((messages, index) => (
          <div
            className={`parent-messages flex flex-col ${
              messages.type == "sent" ? "items-end" : "items-start"
            } `}
          >
            <div
              className={`flex ${
                messages.type == "sent"
                  ? " justify-end "
                  : " justify-end flex-row-reverse "
              } m-1 mx-4 w-max flex`}
            >
              <div
                className={`messages ${
                  messages.type == "sent"
                    ? "bg-[#4931d0e9] rounded-tr-none"
                    : "bg-gray-800 rounded-tl-none "
                }  w-max p-2 items-end flex flex-col gap-2 rounded-lg max-w-[800px] min-w-[150px]`}
              >
                <span className="text-wrap flex-wrap text-sm w-full break-all">
                  {messages.text}
                </span>
                <div>
                  <span className="text-[10px] text-gray-400">{messages.time}</span>
                </div>
              </div>
              <div
                className={`w-2 flex flex-col ${
                  messages.type == "sent" ? "" : "items-end"
                } h-10`}
              >
                <div
                  className={`${
                    messages.type == "sent" ? "bg-[#4931d0e9]" : "bg-gray-800"
                  } h-2 w-2`}
                ></div>
                <div
                  className={`bottom-[7px] h-5 w-5  shadow-gray-900 relative bg-gray-900 rounded-full`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayChatMessages;
