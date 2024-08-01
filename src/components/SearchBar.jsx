import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="bg-gray-800 rounded-lg ">
        <input
          type="text"
          className="bg-transparent rounded-lg px-3 text-sm w-full h-full outline-none"
          placeholder="Search users..."
        />
      </div>
    </>
  );
};

export default SearchBar;
