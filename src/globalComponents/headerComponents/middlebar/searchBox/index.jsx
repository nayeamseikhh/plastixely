import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <>
      <div className="mt-5">
        <div className="flex gap-x-5 h-10 w-full bg-white01 rounded-2xl items-center pl-5">
          <div className=" text-white02">
            <FaSearch size={20} />
          </div>
          <p className="text-white02 font-poppins">Search For products...</p>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
