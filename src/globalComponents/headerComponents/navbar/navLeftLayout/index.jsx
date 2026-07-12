import React, { useEffect, useState } from "react";

const NavLeftLayout = () => {
  const date = new Date()
    .toLocaleDateString("en-GB", {
      timeZone: "Europe/London",
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();
  const time = new Date()
    .toLocaleTimeString("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toUpperCase();
  return (
    <>
      <div className="flex gap-x-6">
        <p className="text-[20px]  font-poppins">
          {/* {currentTime.toDateString()}, {currentTime.toLocaleTimeString()} */}
          {date}
        </p>
        <p className="text-[20px]  font-poppins">
          {/* {currentTime.toDateString()}, {currentTime.toLocaleTimeString()} */}
          {time}
        </p>
      </div>
    </>
  );
};

export default NavLeftLayout;
