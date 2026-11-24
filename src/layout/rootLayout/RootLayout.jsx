// import React from "react";
import HearderComponents from "../../globalComponents/headerComponents";
import { Outlet } from "react-router";
import StickyComponents from "../../globalComponents/stickyComponents";
import Footer from "../../globalComponents/footer";
import ScrollTop from "../../globalComponents/scrollTop";

const RootLayout = () => {
  return (
    <>
      
      <HearderComponents />
      <StickyComponents />
      <ScrollTop/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default RootLayout;
