import { useTranslation } from "react-i18next";

const hours = [
  { day: "businessHours.mondayFriday", time: "9:00 AM - 6:00 PM" },
  { day: "businessHours.saturday", time: "10:00 AM - 4:00 PM" },
  { day: "businessHours.sunday", time: "businessHours.closed" },
  { day: "businessHours.bankHoliday", time: "businessHours.closed" },
];

const OperatingHours = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden space-y-4">
        <h2 className="text-lg font-bold text-center">
          FD PLASTIX, TOOLZ & SPAREZ LTD
        </h2>

        <p className="text-center text-sm font-medium">
          {t("customarServicePhoneLine")}
        </p>

        {hours.map((item, index) => (
          <div
            key={index}
            className="border-2 border-white rounded-lg p-4 shadow-sm"
          >
            <p className="font-bold">{t(item.day)}</p>

            <p className="mt-2 text-gray-700">{t(item.time)}</p>
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto ">
        <table className="w-full border-2 border-white border-collapse text-center">
          <thead>
            <tr>
              <th className="border-2 border-white px-6 py-5 text-2xl font-bold underline">
                {t("operatingDays")}
              </th>

              <th className="border-2 border-white px-6 py-5">
                <h2 className="text-2xl font-bold underline">
                  FD PLASTIX, TOOLZ & SPAREZ LTD
                </h2>

                <p className="mt-2 text-xl font-semibold underline">
                  {t("customarServicePhoneLine")}
                </p>
              </th>
            </tr>
          </thead>

          <tbody>
            {hours.map((item, index) => (
              <tr key={index}>
                <td className="border-2 border-white py-8 text-2xl italic font-semibold">
                  {t(item.day)}
                </td>

                <td className="border-2 border-white py-8 text-xl italic">
                  {t(item.time)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OperatingHours;
