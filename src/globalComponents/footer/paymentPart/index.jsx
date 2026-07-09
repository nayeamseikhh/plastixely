import React from "react";
import DeliveryMethood from "./delivery";
import PaymentMethood from "./payment";

const PaymentPart = () => {
  return (
    <>
      <div className="grid grid-cols-4 text-white">
        <div></div>
        <div>
          <DeliveryMethood />
        </div>
        <div>
          <PaymentMethood />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default PaymentPart;
