import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="bg-gray-800 rounded-lg">
        <input
          type="text"
          className="bg-transparent rounded-lg p-3 text-sm w-full h-full outline-none"
          placeholder="Search Chats..."
        />
      </div>
    </>
  );
};

export default SearchBar;
