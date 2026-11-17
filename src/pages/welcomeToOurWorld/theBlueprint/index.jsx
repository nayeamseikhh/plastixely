// import React from "react";
// import theBlueprint from "../../../assets/images/theBlueprint.jpeg";
// import Container from "../../../globalComponents/Container";

// const TheBluePrint = () => {
//   return (
//     <>
//       <Container>
//         <div className="mb-10">
//           <h2 className="text-6xl font-semibold font-poppins my-10 text-center">
//             THE BLUEPRINT
//           </h2>
//           <div className="md:grid grid-cols-2 gap-x-2">
//             <div className="h-[90%] w-[90%]">
//               <img src={theBlueprint} alt="" />
//             </div>
//             <div>
//               <div>
//                 <h6 className="text-4xl font-semibold text-center font-poppins">
//                   OUR MISSION
//                 </h6>
//                 <p className="text-3xl text-center mt-10 font-poppins">
//                   To empower global industries by delivering <br />
//                   high-quality mechanical components, hardware, <br />
//                   and engineering consulting, ensuring operational <br />
//                   excellence and seamless digital transformation <br />
//                   through advanced CAD and BIM modelling.
//                 </p>
//               </div>
//               <div>
//                 <h6 className="text-4xl font-semibold text-center mt-40 font-poppins">
//                   OUR VISION
//                 </h6>
//                 <p className="text-3xl text-center mt-10 font-poppins">
//                   To be a world-leading enterprise that <br />
//                   seamlessly bridges physical industrial <br />
//                   supplies with virtual engineering <br />
//                   expertise, driving sustainable global advancement.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default TheBluePrint;

import React from "react";
import theBlueprint from "../../../assets/images/theBlueprint.jpeg";
import Container from "../../../globalComponents/Container";

const TheBluePrint = () => {
  return (
    <Container>
      <section className="py-10 lg:py-16">
        {/* Heading */}
        <h2 className="mb-8 text-center font-poppins text-3xl font-bold sm:text-4xl lg:mb-14 lg:text-6xl">
          THE BLUEPRINT
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={theBlueprint}
              alt="The Blueprint"
              className="w-full max-w-lg rounded-xl object-cover shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="space-y-12 lg:space-y-20">
            {/* Mission */}
            <div>
              <h3 className="mb-4 text-center font-poppins text-2xl font-semibold sm:text-3xl lg:text-4xl">
                OUR MISSION
              </h3>

              <p className="text-center font-poppins text-base leading-8 text-gray-700 sm:text-lg lg:text-2xl lg:leading-10">
                To empower global industries by delivering high-quality
                mechanical components, hardware, and engineering consulting,
                ensuring operational excellence and seamless digital
                transformation through advanced CAD and BIM modelling.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h3 className="mb-4 text-center font-poppins text-2xl font-semibold sm:text-3xl lg:text-4xl">
                OUR VISION
              </h3>

              <p className="text-center font-poppins text-base leading-8 text-gray-700 sm:text-lg lg:text-2xl lg:leading-10">
                To be a world-leading enterprise that seamlessly bridges
                physical industrial supplies with virtual engineering expertise,
                driving sustainable global advancement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default TheBluePrint;
