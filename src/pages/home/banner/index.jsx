import banner_images from "../../../assets/images/banner01.jpg";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative h-210 w-full overflow-hidden bg-black">
        <img
          className="h-full w-full object-fill absolute inset-0"
          src={banner_images}
          alt="Banner Tools Images"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex h-full flex-col  mt-5 text-center text-white px-4">
          <h1 className="text-4xl font-bold md:text-6xl font-poppins ">
            {t("homeTitle")}
          </h1>
          <p className="mt-4 text-lg md:text-xl ">
            {t("homeDescription")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
