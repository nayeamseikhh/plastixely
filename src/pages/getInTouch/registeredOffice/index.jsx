import React from "react";
import Container from "../../../globalComponents/Container";
import RegisteredOfficeImg from "../../../assets/images/GetinTouch_R2_Gonder.jpg";

const RegisteredOffice = () => {
  return (
    <>
      <Container>
        <div className="mt-10 font-poppins text-center leading-20 font-bold">
          <h2 className="text-[50px]">HOW CAN WE HALP YOU ?</h2>
          <h2 className="text-[46px] mt-6">GET IN TOUCH WITH US ! </h2>
        </div>


        <div className="grid grid-cols-2 my-10 justify-center ">
          <div className="h-full w-full rounded-md">
            <img
              src={RegisteredOfficeImg}
              alt="Registered Office Images"
              className="h-full w-full object-cover rounded-md"
            />
          </div>

          <div className="ml-20 text-center">
            <h2 className="text-4xl font-semibold md:text-[44px] font-poppins ">
              REGISTERED OFFICE ADDRESS:
            </h2>
            <h6 className="font-poppins font-semibold md:text-[38px] my-6">
              FD PLASTIX, TOOLZ & SPAREZ LTD
            </h6>
            <p className="font-poppins font-semibold text-[28px] leading-10">
              THE STORAGE TEAM OF A.R.T. CENTRE <br /> TAN HOUSE LANE <br />{" "}
              WIDNES <br /> WA8 0RR <br />
              UNITED KINGDOM
            </p>
          </div>
        </div>

        <div className=" font-poppins text-center text-4xl leading-20 font-bold">
          <h2>Our HomePage URL :</h2>
          <h2><a href="https://www.plastixely.com" className="text-blue-500"><u>https://www.plastixely.com</u></a></h2>
        </div>
      </Container>
    </>
  );
};

export default RegisteredOffice;
