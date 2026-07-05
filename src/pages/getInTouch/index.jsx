import React from "react";
import GetInTouchBanner from "./getInTouchBanner";
import RegisteredOffice from "./registeredOffice";
import Form from "./form";
import ContactPhone from "./contactPhone";

const GetInTouch = () => {
  return (
    <>
      <GetInTouchBanner />
      <RegisteredOffice />
      <ContactPhone/>
      {/* <Form /> */}
    </>
  );
};

export default GetInTouch;
