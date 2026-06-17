import React from "react";
import Container from "../../../globalComponents/Container";
import RegisteredOfficeImg from "../../../assets/images/GetinTouch_R2_Gonder.jpg";

const RegisteredOffice = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-2 my-20 justify-center ">
          <div className="h-full w-full rounded-md">
            <img
              src={RegisteredOfficeImg}
              alt="Registered Office Images"
              className="h-full w-full object-cover rounded-md"
            />
          </div>

          <div className="ml-20">
            <h2 className="text-4xl font-bold md:text-[45px] font-poppins ">
              REGISTERED OFFICE ADDRESS:
            </h2>
            <h6 className="font-poppins font-semibold md:text-[20px] my-5">
              FD PLASTIX, TOOLZ & SPAREZ LTD
            </h6>
            <p className="font-poppins">
              The Storage Team of A.R.T. Centre <br /> Tan House Lane <br />{" "}
              Widnes <br /> WA8 0RR <br />
              UNITED KINGDOM
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RegisteredOffice;
