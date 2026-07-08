import React from "react";
import Container from "../../../globalComponents/Container";
import OperatingHours from "../operatingHours";

const ContactPhone = () => {
  return (
    <>
      <Container>
        <div className="md:mt-8 mt-4 font-poppins md:text-start text-center p-1 md:text-2xl text-base md:leading-12 leading-8 font-bold">
          <h2>
            GET IN TOUCH THROUGH THESE CHANNELS: <br />
            Email our team: <br />
            <a href="mailto:info@plastixely.com" className="text-blue01">
              <u>info@plastixely.com</u>
            </a>{" "}
            <br />
            (Our team responds to all inquiries within one business day. ){" "}
            <br />
            Connect with our team via Phone: <br />
            To reach our sales department for general or commercial inquiries,
            please call our designated helpline: <br />
            0000000000000 <br />
            Please find below our official customer service and technical
            support operating hours: <br />
          </h2>
          <div className="my-5">
            <OperatingHours />
          </div>
        </div>

        <div className=" font-poppins md:text-start text-center p-1 md:text-2xl text-base md:leading-12 leading-8 font-bold">
          <h2 className="font-poppins">
            Message our team via WhatsApp: <br />
            <a href="https://wa.me/447741003192" className="text-blue01">
              <u>+447741003192</u>
            </a>{" "}
            <br />
            Contact us by Post: <br />
            If you wish to write to us, our mailing address is: <br />
            FD PLASTIX, TOOLZ & SPAREZ LTD <br />
            THE STORAGE TEAM OF A.R.T. CENTRE <br />
            TAN HOUSE LANE <br /> WIDNES <br />
            WA8 0RR <br />
            UNITED KINGDOM <br />
          </h2>
        </div>
      </Container>
      <br />
    </>
  );
};

export default ContactPhone;
