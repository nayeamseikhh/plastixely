import visa from "../../../../assets/icon/visa.jpg";
import applePay from "../../../../assets/icon/apple-pay.png";
import mastercard from "../../../../assets/icon/mastercard02.svg";
import paypal from "../../../../assets/icon/paypal.png";
import googlePay from "../../../../assets/icon/gpay02.png";

const PaymentMethood = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center text-white font-poppins font-semibold  text-xl">
          <h6>SECURE PAYMENT OPTIONS</h6>
          <br />
          <div>
            <div className="flex items-center justify-center gap-6  md:gap-6 lg:gap-8 mt-6 md:mt-6">
              {/* <p>-Visa</p> */}{" "}
              <img
                className="w-16 h-10 rounded-sm object-cover p-1 bg-white"
                src={visa}
                alt="Visa"
              />
              {/* <p>-Mastercard</p>  */}{" "}
              <img
                className="w-16 h-10 rounded-sm bg-white p-1"
                src={mastercard}
                alt="Mastercard"
              />
              {/* <p>-PayPal</p>  */}{" "}
              <img
                className="w-16 h-10 rounded-sm bg-white p-1"
                src={paypal}
                alt="Paypal"
              />
            </div>
            <div className="flex items-center justify-center gap-6 sm:gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-6">
              {/* <p>-Apple Pay</p> */}
              <img
                className="w-16 h-10 rounded-sm bg-white object-cover p-1"
                src={applePay}
                alt="Apple Pay"
              />
              {/* <p>-Google Pay</p> */}{" "}
              <img
                className="w-16 h-10 rounded-sm bg-white p-1  object-contain"
                src={googlePay}
                alt="Google Pay"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethood;
