import React from "react";
import Container from "../../../globalComponents/Container";
import OperatingHours from "../operatingHours";
import { useTranslation } from "react-i18next";

const ContactPhone = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <div className="md:mt-8 mt-4 font-poppins md:text-start text-center md:text-2xl text-base md:leading-12 leading-8 font-bold">
          <h2>
            {t("getInTouchThroughTheseChannels")} <br />
            {t("emailOurTram")} <br />
            <a href="mailto:info@plastixely.com" className="text-blue01">
              <u>info@plastixely.com</u>
            </a>
            <br />
            {t("ourTeamRespondsToAllInuquiriesWithinOneBusinessDay")}
            <br />
            {t("connectWithOurTeamViaPhone")}
            <br />
            {t("toReachOurSalesDepartmentForGeneralOrCommercialInquiries")}
            <br />
            0000000000000 <br />
            {t("plzFindBelow..operationHours")}
            <br />
          </h2>
          <div className="my-5">
            <OperatingHours />
          </div>
        </div>

        <div className=" font-poppins md:text-start text-center  md:text-2xl text-base md:leading-12 leading-8 font-bold">
          <h2 className="font-poppins">
            {t("messageOurTeamViaWhatsapp")}
            <br />
            <a href="https://wa.me/447741003192" className="text-blue01">
              <u>+447741003192</u>
            </a>
            <br />
            {t("contactUsByPost")}
            <br />
            {t("ifYouWishtoWrieToUsMailingAddressIs")}
            <br />
            {t("fdPlastixToolz&sparezLTD")}
            <br />
            {t("theStorageTeamOfARTCenter")}
            <br />
            {t("tanHouseLane")}
            <br /> {t("widnes")}
            <br />
            {t("wa80RR")}
            <br />
            {t("unitedKingdom")}
            <br />
          </h2>
        </div>
      </Container>
      <br />
    </>
  );
};

export default ContactPhone;
