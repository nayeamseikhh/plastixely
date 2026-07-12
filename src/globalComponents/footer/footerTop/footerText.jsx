import React from "react";

const FooterText = () => {
  return (
    <>
      {/* For Desktop */}
      <div className=" text-white leading-8 hidden md:block w-full ">
        <p className="text-center  text-xl  font-open-sans">
          <i>
            © 2026 FD PLASTIX, TOOLZ & SPAREZ LTD, CRN: 17190057, EORI NUMBER:
            GB048164708000 <br />
            Registered Office Address: The Storage Team of A.R.T. Centre, Tan
            House Lane, Widnes, WA8 0RR, UNITED KINGDOM
          </i>
        </p>
        <p className="text-center text-lg mt-8 font-open-sans">
          <i>
            {" "}
            FD PLASTIX, TOOLZ & SPAREZ LTD is an independent specialist reseller
            of genuine vehicle parts and power tool components. <br /> We are
            not an authorised dealer, partner, or affiliate of any vehicle or
            tool manufacturer. <br /> All brand names, logos, trademarks, and
            model designations are the property of their respective owners and{" "}
            <br />
            are used purely for compatibility and product identification
            purposes.
          </i>
        </p>
        <p className="text-center text-sm font-open-sans mt-8">
          <i>
            © FD PLASTIX, TOOLZ & SPAREZ LTD 2026 | All rights reserved <br />
            FD PLASTIX, TOOLZ & SPAREZ LTD T/A FD PTnS Company Number: 17190057
          </i>
        </p>
        <br />
        <p className="text-center  text-lg font-open-sans">
          <i>
            <u>Website by FD & NS</u>
          </i>
        </p>
      </div>

      {/* For Mobile  */}
      <div className=" text-white leading-8 md:hidden">
        <p className="text-center   text-xl font-open-sans">
          <i>
            © 2026 FD PLASTIX, TOOLZ & SPAREZ LTD, CRN: 17190057, EORI NUMBER:
            GB048164708000 <br />
            Registered Office Address: The Storage Team of A.R.T. Centre, Tan
            House Lane, Widnes, WA8 0RR, UNITED KINGDOM
          </i>
        </p>

        <p className="text-center  text-xl my-10 font-open-sans">
          <i>
            {" "}
            FD PLASTIX, TOOLZ & SPAREZ LTD is an independent specialist reseller
            of genuine vehicle parts and power tool components. <br /> We are
            not an authorised dealer, partner, or affiliate of any vehicle or
            tool manufacturer. <br /> All brand names, logos, trademarks, and
            model designations are the property of their respective owners and
            are used purely for compatibility and product identification
            purposes.
          </i>
        </p>

        <p className="text-center text-xl font-open-sans">
          <i>
            © FD PLASTIX, TOOLZ & SPAREZ LTD 2026 | All rights reserved FD
            PLASTIX, TOOLZ & SPAREZ LTD T/A FD PTnS Company Number: 17190057
          </i>
        </p>
        <p className="text-center  text-lg  font-open-sans">
          <i>
            <u>Website by FD & NS</u>
          </i>
        </p>
      </div>
    </>
  );
};

export default FooterText;
