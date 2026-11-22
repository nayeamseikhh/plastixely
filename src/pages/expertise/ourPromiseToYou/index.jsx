import Container from "../../../globalComponents/Container";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const promise = [
  {
    title: "premiumProductSourcingTitle",
    description: "premiumProductSourcingDescription",
  },
  {
    title: "qualityControlTitle",
    description: "qualityControlDescription",
  },
  {
    title: "securePackagingTitle",
    description: "securePackagingDescription",
  },
  {
    title: "timelyDeliveryTitle",
    description: "timelyDeliveryDescription",
  },
];

const OurPromiseToYou = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-black">
        <Container>
          <section className=" text-white pb-10">
            <h2 className="text-3xl md:text-6xl font-bold text-center mb-10 font-poppins">
              {t("workPromiseHeading")}
            </h2>
            <div className="max-w-5xl mx-auto ">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8">
                {promise.map((item, index) => (
                  <div
                    key={index}
                    className="border-[5px] border-white p-1 rounded-sm
              transition-all duration-300
              hover:-translate-y-2 hover:scale-[1.02]"
                  >
                    <div className="border-[3px] border-white bg-black h-full px-6 py-10 flex flex-col items-center text-center">
                      <FaTimes className="text-orange-600 text-7xl md:text-8xl mb-6" />

                      <h3 className="font-bold text-lg md:text-xl uppercase mb-5 font-poppins">
                        {t(item.title)}
                      </h3>

                      <p className="text-gray-200 italic text-sm md:text-lg leading-relaxed font-poppins">
                        {t(item.description)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          );
        </Container>
      </div>
    </>
  );
};
export default OurPromiseToYou;
