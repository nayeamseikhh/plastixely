import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <>
      <div className="fixed right-10 top-210 -translate-y-1/2 z-50">
        <div className=" px-5 py-2 bg-green-400 rounded-xl sticky top-0 z-50 shadow flex items-center gap-x-4 font-semibold">
          <FaWhatsapp size={25} />
          <p>How Can I Help You?</p>
        </div>
      </div>
    </>
  );
};

export default WhatsApp;
