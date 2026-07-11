import React from "react";
import Container from "../../../globalComponents/Container";
import RegisteredOfficeImg from "../../../assets/images/getintouchcontact.jpeg";
import { useTranslation } from "react-i18next";

const RegisteredOffice = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <div className="md:mt-10 mt-4 font-poppins text-center md:leading-20 font-bold">
          <h2 className="md:text-[50px] text-2xl">{t("howCanWeHelpYou")}</h2>
          <h2 className="md:text-[46px] md:mt-6 text-2xl">
            {t("getInTouchWithUs")}
          </h2>
        </div>

        <div className="md:grid md:grid-cols-2 md:my-10 justify-center ">
          <div className="h-full w-full rounded-md my-4 md:my-0">
            <img
              src={RegisteredOfficeImg}
              alt="Registered Office Images"
              className="h-full w-full object-cover rounded-md"
            />
          </div>

          <div className="md:ml-20 text-center">
            <h2 className="text-2xl font-semibold md:text-[44px] font-poppins ">
              {t("registeredOfficeAdddress")}
            </h2>
            <h6 className="font-poppins font-semibold text-xl md:text-[38px] my-6">
              {t("fdPlastixToolz&sparezLTD")}
            </h6>
            <p className="font-poppins font-semibold md:text-[28px] text-base md:leading-10 leading-8">
              {t("theStorageTeamOfARTCenter")} <br /> {t("tanHouseLane")} <br />
              {t("widnes")} <br /> {t("wa80RR")} <br />
              {t("unitedKingdom")}
            </p>
          </div>
        </div>

        <div className=" font-poppins text-center md:text-4xl text-xl mt-4 md:mt-0 md:leading-20 leading-8 font-bold">
          <h2>{t("ourHomePageURL")}</h2>
          <h2>
            <a href="https://www.plastixely.com" className="text-blue01">
              <u>https://www.plastixely.com</u>
            </a>
          </h2>
        </div>
      </Container>
    </>
  );
};

export default RegisteredOffice;
