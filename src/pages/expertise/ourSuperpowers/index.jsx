import Container from "../../../globalComponents/Container";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const powers = [
  {
    title: "enterpriseSuppliesTitle",
    description: "enterpriseSuppliesDescription",
  },
  {
    title: "strategicOemTitle",
    description: "strategicOemDescription",
  },
  {
    title: "aftermarketPartsTitle",
    description: "aftermarketPartsDescription",
  },
  {
    title: "technicalDraftingTitle",
    description: "technicalDraftingDescription",
  },
  {
    title: "nextGenerationModellingTitle",
    description: "nextGenerationModellingDescription",
  },
  {
    title: "expertSolutionsTitle",
    description: "expertSolutionsDescription",
  },
];

const OurSuperPowers = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-black">
        <Container>
          {/* <div className="mt-10">
          <h2 className="font-bold text-6xl text-center">OUR SUPERPOWERS</h2>
        </div>
        <div className="flex flex-w justify-center gap-4 my-10 ">
          <div className="max-w-100">
            <div className="border-5 rounded-sm ">
              <div className="border-4 border-transparent">
                <div className="border-5">
                  <div className="font-bold text-red-500 text-center text-8xl">
                    X
                  </div>
                  <h4 className="text-center">ENTERPRISE-GRADE SUPPLIES</h4>
                  <p className="text-center p-4 ">
                    <i>
                      Equipping professionals with <br />
                      industry-leading hardware <br />
                      and industrial components.
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
          <section className=" text-white py-10">
            <div className="max-w-8xl mx-auto ">
              <h2 className="text-3xl md:text-6xl font-bold text-center mb-12 font-poppins">
                {t("superpowersHeading")}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {powers.map((item, index) => (
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

export default OurSuperPowers;
