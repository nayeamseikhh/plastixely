import React from "react";

const ContactInformation = () => {
  return (
    <>
      <div>
        <h4 className="text-[25px] font-semibold font-poppins">
          CONTACT US TODAY
        </h4>

        <div className="my-5">
          <h6 className="font-semibold text-[20px]">SALES TEAM :</h6>
        </div>

        <div>
          <h6 className="font-semibold text-[20px]">OUR HOMEPAGE URL :</h6>
          <a
            className="text-blue-700 font-semibold"
            href="https://www.plastixely.com/"
          >
            https://www.plastixely.com/
          </a>
        </div>

        <div className="my-5">
          <h6 className="font-semibold text-[20px]">EMAIL US :</h6>
          <a
            className="text-blue-700 font-semibold"
            href="mailto:Info@plastixely.com"
          >
            Info@plastixely.com
          </a>
        </div>

        <div>
          <h6 className="font-semibold text-[20px]">WHATSAPP :</h6>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
