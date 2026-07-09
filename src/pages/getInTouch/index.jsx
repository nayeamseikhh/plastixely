import React, { useEffect } from "react";
import GetInTouchBanner from "./getInTouchBanner";
import RegisteredOffice from "./registeredOffice";
import Form from "./form";
import ContactPhone from "./contactPhone";
import bgImage from "../../assets/background/Background01.jpeg";

const GetInTouch = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <div className="getintouch text-white">
        <GetInTouchBanner />
        <RegisteredOffice />
        <ContactPhone />
        {/* <Form /> */}
      </div>
    </>
  );
};

export default GetInTouch;
