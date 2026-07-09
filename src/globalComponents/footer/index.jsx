import React from "react";
import Container from "../Container";
import FooterLayout01 from "./footerLayout01";
import FooterLayout02 from "./footerLayout02";
import FooterLayout03 from "./footerLayout03";
import FooterLayout04 from "./footerLayout04";
import FooterTop from "./footerTop";
import FooterText from "./footerTop/footerText";
import visa from "../../assets/icon/visa.jpg";
import applePay from "../../assets/icon/apple-pay.png";
import mastercard from "../../assets/icon/mastercard02.svg";
import paypal from "../../assets/icon/paypal.png";
import googlePay from "../../assets/icon/gpay02.png";
import PaymentPart from "./paymentPart";

const Footer = () => {
  return (
    <>
      <div className=" bg-black01">
        <Container>
          <div className="text-white md:py-10 ">
            <FooterTop />
          </div>
          <div className="border-t border-gray-600 "></div>
          <div className="md:grid md:grid-cols-4 gap-10 pt-10">
            <FooterLayout01 />
            <FooterLayout02 />
            <FooterLayout03 />
            <FooterLayout04 />
          </div>
        </Container>

        <Container>
          <div className="py-10">
            <PaymentPart />
          </div>
        </Container>
      </div>

      <div className="bg-black01 md:pb-10">
        <div className="text-black">
          <FooterText />
        </div>
      </div>
    </>
  );
};

export default Footer;
