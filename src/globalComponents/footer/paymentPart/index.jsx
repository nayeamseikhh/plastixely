import React from "react";
import DeliveryMethood from "./delivery";
import PaymentMethood from "./payment";

const PaymentPart = () => {
  return (
    <>
      <div className="flex flex-col gap-4 md:gap-0 md:grid md:grid-cols-4 text-white">
        <div></div>
        <div>
          <DeliveryMethood />
        </div>
        <div className="mt-2 md:mt-0">
          <PaymentMethood />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default PaymentPart;
