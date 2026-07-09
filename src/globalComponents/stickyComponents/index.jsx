import React from "react";
import WhatsApp from "./whatsApp";
import LanguageChange from "./LanguageChange";
import Container from "../Container";

const StickyComponents = () => {
  return (
    <>
      <Container>
        <WhatsApp />
        <LanguageChange />
      </Container>
    </>
  );
};

export default StickyComponents;
