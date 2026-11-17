// import React from "react";
// import expertise_banner from "../../../assets/images/expertise_banner.jpeg";
// import { useTranslation } from "react-i18next";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// const ExpertiseBanner = () => {
//   const { t } = useTranslation();
//   return (
//     <>
//       <div className="expertise">
//         <div className="relative md:h-230 md:w-full overflow-hidden bg-black">
//           <img
//             className="h-full w-full md:object-fill absolute inset-0"
//             src={expertise_banner}
//             alt="Expertise Images"
//           />
//           <div className="absolute inset-0 bg-black/50"></div>

//           <div className="relative z-10 flex h-full flex-col  text-center text-white px-4">
//             <h1 className="text-xl font-bold md:text-6xl font-poppins pt-55  md:pt-180">
//               OUR EXPERTISE
//             </h1>
//             {/* <div className="flex items-center justify-center my-4 md:my-0 md:mt-10 text-sm md:text-xl font-poppins">
//               <p>OUR EXPERTISE</p>
//               <MdKeyboardDoubleArrowRight className="mx-5" />
//               <a href="./">{t("start")}</a>
//             </div> */}
//           </div>
//         </div>

//         {/* <div>
//           <p className="py-140 text-4xl text-white font-bold text-center">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
//             est.
//           </p>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default ExpertiseBanner;

import React from "react";
import expertise_banner from "../../../assets/images/expertise_banner.jpeg";
import { useTranslation } from "react-i18next";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ExpertiseBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[260px] sm:h-[350px] md:h-[500px] lg:h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={expertise_banner}
        alt="Expertise Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <div>
          <h1 className="font-poppins text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            OUR EXPERTISE
          </h1>

          {/* Breadcrumb (Optional) */}
          {/*
          <div className="mt-4 flex items-center justify-center text-sm text-white sm:text-base md:text-lg">
            <p>OUR EXPERTISE</p>
            <MdKeyboardDoubleArrowRight className="mx-2 sm:mx-3" />
            <a href="./">{t("start")}</a>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseBanner;
