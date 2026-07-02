import React from "react";
import HearderComponents from "../../globalComponents/headerComponents";
import { Outlet } from "react-router";
import StickyComponents from "../../globalComponents/stickyComponents";
import Footer from "../../globalComponents/footer";

const RootLayout = () => {
  return (
    <>
      <HearderComponents />
      <StickyComponents />
      <Outlet />
      <Footer/>
    </>
  );
};

export default RootLayout;
