import royel_mail from "../../../../assets/shipmentIcon/royel_mail.jpeg";
import parcel_force from "../../../../assets/shipmentIcon/parcel_force.jpeg";
import dhl from "../../../../assets/shipmentIcon/dhl.jpeg";
import dpd from "../../../../assets/shipmentIcon/dpd.jpeg";
import ups from "../../../../assets/shipmentIcon/ups.jpeg";
import evri from "../../../../assets/shipmentIcon/evri.jpeg";

const DeliveryMethood = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center text-white font-poppins font-semibold text-xl">
          <h6>GLOBAL SHIPPING AVAILABLE</h6>
          <br />
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-6">
            {/* <p>-Royel Mail</p>  */}{" "}
            <img
              className="w-16 h-10 rounded-sm object-cover p-1 bg-white"
              src={royel_mail}
              alt="Royel Mail"
            />
            {/* <p > ( PARCEL FORCE )</p> */}{" "}
            <img
              className="w-16 h-10 rounded-sm object-cover p-1 bg-white"
              src={parcel_force}
              alt="PARCEL FORCE"
            />
            {/* <p>-DHL</p> */}{" "}
            <img
              className="w-16 h-10 rounded-sm object-cover p-1 bg-white"
              src={dhl}
              alt="DHL"
            />
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-6">
            {/* <p>-DPD</p> */}{" "}
            <img
              className="w-16 h-10 rounded-sm object-cover p-1 bg-white"
              src={dpd}
              alt="DPD"
            />
            {/* <p>-UPS</p> */}{" "}
            <img
              className="w-16 h-10 rounded-sm object-cover p-1 bg-white"
              src={ups}
              alt="UPS"
            />
            {/* <p>-Evri</p> */}{" "}
            <img
              className="w-16 h-10 rounded-sm object-cover p-1 bg-white"
              src={evri}
              alt="Evri"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryMethood;
