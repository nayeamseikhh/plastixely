import React from "react";

const GetInTouchFormDesign = () => {
  return (
    <>
      <form action="">
        <div className="border px-15 py-5 text-center bg-white01 rounded-xl">
          {/* Heading */}
          <div>
            <h4 className="text-5xl font-semibold font-poppins ">
              GET IN TOUCH
            </h4>
            <p className="font-poppins my-5 text-[15px]">
              Please feel free to get in touch with us about anything, no matter
              how
              <br />
              small, and we will get back to you as quickly as we possibly can!
            </p>
          </div>
          {/* Fill Part */}
          <div>
            <div>
              <label htmlFor="">
                Full Name: <span className="text-red-500">*</span>
              </label>
              <input className="bg-white" type="text" name="Full Name" id="" />
            </div>

            <div>
              <label htmlFor="">Company Name:</label>
              <input
                className="bg-white"
                type="text"
                name="Company Name"
                id=""
              />
            </div>

            <div>
              <label htmlFor="">
                Email Address: <span className="text-red-500">*</span>{" "}
              </label>
              <input className="bg-white" type="email" name="email" id="" />
            </div>

            <div>
              <label htmlFor="">Phone Number:</label>
              <input className="bg-white" type="number" name="number" id="" />
            </div>

            <div>
              <label htmlFor="">
                Subject: <span className="text-red-500">*</span>{" "}
              </label>
              <input className="bg-white" type="text" name="subject" id="" />
            </div>

            <div>
              <label htmlFor="">
                Message: <span className="text-red-500">*</span>
              </label>
              <input
                className="bg-white h-20 w-50"
                type="text"
                name="Full Name"
                id=""
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default GetInTouchFormDesign;
