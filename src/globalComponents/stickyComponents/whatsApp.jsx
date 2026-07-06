import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import whatsapp from "../../assets/icon/whats app.jpeg"

const WhatsApp = () => {
  return (
    <>
      <div className="fixed right-10 top-210 -translate-y-1/2 z-50">
        <div className="  rounded-xl sticky top-0 z-50 shadow flex items-center gap-x-4 font-semibold">
          {/* <FaWhatsapp size={25} /> */}
         
          <a href="https://wa.me/447741003192" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp" className='text-blue-500'> 
              <img src={whatsapp} className="h-11 p-0.5  w-12 rounded-lg " alt="whats app" />
          </a>
          
        </div>
      </div>
    </>
  );
};

export default WhatsApp;
