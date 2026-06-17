import React from "react";
import Container from "../../../globalComponents/Container";
import ContactInformation from "./contactInformation";
import GetInTouchFormDesign from "./formDesign";

const Form = () => {
  return (
    <>
      <Container>
        <div className="flex gap-x-20 my-50">
          <ContactInformation />
          <GetInTouchFormDesign />
        </div>
      </Container>
    </>
  );
};

export default Form;
