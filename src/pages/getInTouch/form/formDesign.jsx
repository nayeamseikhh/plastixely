// import React from "react";

import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";

const GetInTouchFormDesign = () => {
  const { t } = useTranslation();
  const recaptchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = recaptchaRef.current.getValue();

    if (!token) {
      alert(t("recaptchaPrompt"));
      return;
    }

    console.log("reCAPTCHA Token:", token);

    // Send the token to your backend for verification

    recaptchaRef.current.reset();
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className=" px-6 py-5 text-center bg-white01 rounded-xl shadow-lg ">
          {/* Heading */}
          <div>
            <h4 className="text-5xl font-semibold font-poppins ">
              {t("getInTouch")}
            </h4>
            <p className="font-poppins my-5 text-[15px] font-semibold ">
              {t("contactFormIntro")}
            </p>
          </div>
          {/* Fill Part */}
          <div className="grid gap-5 text-left font-poppins">
            <div className="flex flex-col font-semibold ">
              <label htmlFor="">
                {t("fullName")}: <span className="text-red-500">*</span>
              </label>
              <input className="bg-white rounded-sm p-1 mt-2" type="text" name="Full Name" id="" />
            </div>

            <div className="flex flex-col font-semibold">
              <label htmlFor="">{t("companyName")}:</label>
              <input
                className="bg-white rounded-sm p-1 mt-2"
                type="text"
                name="Company Name"
                id=""
              />
            </div>

            <div className="flex flex-col font-semibold">
              <label htmlFor="">
                {t("emailAddress")}: <span className="text-red-500">*</span>
              </label>
              <input className="bg-white rounded-sm p-1 mt-2" type="email" name="email" id="" />
            </div>

            <div className="flex flex-col font-semibold">
              <label htmlFor="">{t("phoneNumber")}:</label>
              <input className="bg-white rounded-sm p-1 mt-2" type="number" name="number" id="" />
            </div>

            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="">
                {t("subject")}: <span className="text-red-500">*</span>
              </label>
              <input className="bg-white rounded-sm p-1 mt-2" type="text" name="subject" id="" />
            </div>

            <div className="flex flex-col gap-2 font-semibold">
              <label htmlFor="">
                {t("message")}: <span className="text-red-500">*</span>
              </label>
              <input
                className="bg-white h-20 rounded-sm p-1 my-2"
                type="text"
                name="Message"
                id=""
              />
            </div>

            <div>
              <p className="flex gap-x-1 font-semibold">
                {t("mandatoryField")} <span className="text-red-500">*</span>
              </p>
              <input className="mr-2 my-3" type="checkbox" name="" id="" />{" "}
              <label htmlFor="">{t("privacyConsent")}</label>
            </div>

            <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
      />

            <div>
              <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-600 cursor-pointer">
                {t("send")}
              </button>
            </div>
          
          </div>
        </div>
      </form>
    </>
  );
};

export default GetInTouchFormDesign;
