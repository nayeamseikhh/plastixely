
import royel_mail from "../../../../assets/shipmentIcon/royel_mail.jpeg";
import parcel_force from "../../../../assets/shipmentIcon/parcel_force.jpeg";
import dhl from "../../../../assets/shipmentIcon/dhl.jpeg";
import dpd from "../../../../assets/shipmentIcon/dpd.jpeg";
import ups from "../../../../assets/shipmentIcon/ups.jpeg";
import evri from "../../../../assets/shipmentIcon/evri.jpeg";
import { useTranslation } from "react-i18next";
// import { t } from "i18next";

const DeliveryMethood = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="flex flex-col items-center text-white font-poppins font-semibold text-lg md:text-xl">
          <h6 className="text-center whitespace-nowrap">{t("globalShippingAvailable")}</h6>
          <div className="flex items-center justify-center gap-8 mt-6 lg:mt-8">
            <img
              className="w-16 h-10 rounded-sm object-cover p-1 bg-white"
              src={royel_mail}
              alt="Royel Mail"
            />
            <img
              className="w-16 h-10 rounded-sm object-cover p-1 bg-white"
              src={parcel_force}
              alt="PARCEL FORCE"
            />
            <img
              className="w-16 h-10 rounded-sm object-cover p-1 bg-white"
              src={dhl}
              alt="DHL"
            />
          </div>
          <div className="flex items-center justify-center gap-8 mt-8 lg:mt-8">
            <img
              className="w-16 h-10 rounded-sm object-cover p-1 bg-white"
              src={dpd}
              alt="DPD"
            />
            <img
              className="w-16 h-10 rounded-sm object-cover p-1 bg-white"
              src={ups}
              alt="UPS"
            />
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