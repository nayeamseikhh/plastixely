// import React from "react";
// import welcomeText from "../../../assets/images/banner01.jpg";
// import Container from "../../../globalComponents/Container";

// const WelcomeText = () => {
//   return (
//     <>
//       <Container>
//         <h2 className="text-[38px] font-semibold font-poppins my-10">
//           WELCOME TO OUR WORLD: INTEGRATED INDUSTRIAL & ENGINEERING SOLUTIONS
//         </h2>
//         <div className="grid grid-cols-2 ">
//           <div className="h-full w-full">
//             <img
//               src={welcomeText}
//               alt="WELCOME TO OUR WORLD: INTEGRATED INDUSTRIAL & ENGINEERING SOLUTIONS IMAGES"
//               className="h-full w-full object-fit"
//             />
//           </div>
//           <div className="text-[20px] text-center items-center font-poppins">
//             <p>
//               Welcome to a premier global destination where industrial <br />
//               commerce meets advanced digital engineering. We facilitate <br />
//               international industrial progress through a dual-capability model,
//               <br /> serving as a trusted global supplier of mechanical spare
//               parts <br /> and hardware while delivering elite consulting in CAD
//               and BIM modeling.
//             </p>
//             <p className="mt-10 font-poppins">
//               Our mission is to eliminate the friction between <br />
//               physical procurement and digital design. <br />
//               By providing enterprise-grade tools alongside <br />
//               high-fidelity virtual modeling, we equip global <br />
//               industries with the structural and mechanical <br />
//               integrity required to lead their respective markets. <br />
//               Explore our global network and experience <br />a partnership
//               engineered for excellence.
//             </p>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default WelcomeText;

import React from "react";
import welcomeText from "../../../assets/images/banner01.jpg";
import Container from "../../../globalComponents/Container";

const WelcomeText = () => {
  return (
    <Container>
      <section className="py-10 lg:py-16">
        {/* Heading */}
        <h2 className="mb-8 text-center font-poppins text-xl font-bold leading-tight sm:text-4xl lg:mb-12 lg:text-5xl">
          WELCOME TO OUR WORLD: <br className="hidden sm:block" />
          INTEGRATED INDUSTRIAL & ENGINEERING SOLUTIONS
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Image */}
          <div>
            <img
              src={welcomeText}
              alt="Welcome to our world"
              className="h-full w-full rounded-xl object-cover shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 text-center lg:text-left">
            <p className="font-poppins text-base leading-8 text-gray-700 sm:text-lg lg:text-xl lg:leading-9">
              Welcome to a premier global destination where industrial commerce
              meets advanced digital engineering. We facilitate international
              industrial progress through a dual-capability model, serving as a
              trusted global supplier of mechanical spare parts and hardware
              while delivering elite consulting in CAD and BIM modeling.
            </p>

            <p className="font-poppins text-base leading-8 text-gray-700 sm:text-lg lg:text-xl lg:leading-9">
              Our mission is to eliminate the friction between physical
              procurement and digital design. By providing enterprise-grade
              tools alongside high-fidelity virtual modeling, we equip global
              industries with the structural and mechanical integrity required
              to lead their respective markets. Explore our global network and
              experience a partnership engineered for excellence.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default WelcomeText;
