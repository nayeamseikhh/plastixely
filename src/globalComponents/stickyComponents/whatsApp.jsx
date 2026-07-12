import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import whatsapp01 from "../../assets/icon/whatsapp01.jpeg";
import Container from "../Container";

const WhatsApp = () => {
  return (
    <>
      <div className="fixed right-3.5 md:right-35 md:top-200 top-150   -translate-y-1/2 z-50">
        <div className="  rounded-xl sticky top-0 z-50 shadow flex items-center gap-x-4 font-semibold">
          <a
            href="https://wa.me/447741003192"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="text-blue-500"
          >
            <img
              src={whatsapp01}
              className="h-22 p-0.5  w-24 rounded-lg "
              alt="whats app"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsApp;
