// import React from "react";
// import Container from "../../../globalComponents/Container";

// const PartnerWithUs = () => {
//   return (
//     <>
//       <Container>
//         <div>
//           <div className="my-10">
//             <h2 className="font-poppins text-6xl font-bold text-center">
//               WHY PARTNER WITH US ?
//             </h2>
//             <p className="flex font-poppins text-5xl text-start w-full justify-center leading-14 mt-10">
//               <i>
//                 Your trusted partner for top-tier industrial hardware and <br />
//                 authentic component supply. We pair our robust product <br />
//                 inventory with world-class engineering services— <br />
//                 including professional CAD drafting and advanced BIM <br />
//                 modeling—to streamline your workflow from concept to <br />
//                 completion.
//               </i>
//             </p>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default PartnerWithUs;

import React from "react";
import Container from "../../../globalComponents/Container";

const PartnerWithUs = () => {
  return (
    <Container>
      <section className="py-10 lg:py-16">
        {/* Heading */}
        <h2 className="mb-6 text-center font-poppins text-3xl font-bold sm:text-4xl lg:mb-10 lg:text-6xl">
          WHY PARTNER WITH US?
        </h2>

        {/* Description */}
        <p className="mx-auto max-w-5xl text-center font-poppins text-base italic leading-8 text-gray-700 sm:text-lg lg:text-2xl lg:leading-10">
          Your trusted partner for top-tier industrial hardware and authentic
          component supply. We pair our robust product inventory with
          world-class engineering services—including professional CAD drafting
          and advanced BIM modeling—to streamline your workflow from concept to
          completion.
        </p>
      </section>
    </Container>
  );
};

export default PartnerWithUs;
