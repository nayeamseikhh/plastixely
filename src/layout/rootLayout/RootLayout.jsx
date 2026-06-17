import React from "react";
import HearderComponents from "../../globalComponents/headerComponents";
import { Outlet } from "react-router";
import StickyComponents from "../../globalComponents/stickyComponents";

const RootLayout = () => {
  return (
    <>
      <HearderComponents />
      <StickyComponents />
      <Outlet />
    </>
  );
};

export default RootLayout;
