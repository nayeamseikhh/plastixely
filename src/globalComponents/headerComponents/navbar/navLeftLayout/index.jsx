import React, { useEffect, useState } from "react";

const NavLeftLayout = () => {
  // const [currentTime, setCurrentTime] = useState(new Date());
  // useEffect(() => {
  //   // Update the state every second
  //   const timer = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000);

  // Clear the interval when the component unmounts to prevent memory leaks
  //   return () => clearInterval(timer);
  // }, []);

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
      <div className="flex gap-x-5">
        <p className="text-2xl  font-poppins">
          {/* {currentTime.toDateString()}, {currentTime.toLocaleTimeString()} */}
          {date}
        </p>
        <p className="text-2xl  font-poppins">
          {/* {currentTime.toDateString()}, {currentTime.toLocaleTimeString()} */}
          {time}
        </p>
      </div>
    </>
  );
};

export default NavLeftLayout;
