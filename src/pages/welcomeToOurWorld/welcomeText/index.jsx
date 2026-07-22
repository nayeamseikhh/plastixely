import React from "react";
import welcomeText from "../../../assets/images/banner01.jpg";
import Container from "../../../globalComponents/Container";

const WelcomeText = () => {
  return (
    <>
      <Container>
        <h2 className="text-[38px] font-semibold font-poppins my-10">
          WELCOME TO OUR WORLD: INTEGRATED INDUSTRIAL & ENGINEERING SOLUTIONS
        </h2>
        <div className="grid grid-cols-2 ">
          <div className="h-full w-full">
            <img
              src={welcomeText}
              alt="WELCOME TO OUR WORLD: INTEGRATED INDUSTRIAL & ENGINEERING SOLUTIONS IMAGES"
              className="h-full w-full object-fit"
            />
          </div>
          <div className="text-[20px] text-center items-center font-poppins">
            <p>
              Welcome to a premier global destination where industrial <br />
              commerce meets advanced digital engineering. We facilitate <br />
              international industrial progress through a dual-capability model,
              <br /> serving as a trusted global supplier of mechanical spare
              parts <br /> and hardware while delivering elite consulting in CAD
              and BIM modeling.
            </p>
            <p className="mt-10 font-poppins">
              Our mission is to eliminate the friction between <br />
              physical procurement and digital design. <br />
              By providing enterprise-grade tools alongside <br />
              high-fidelity virtual modeling, we equip global <br />
              industries with the structural and mechanical <br />
              integrity required to lead their respective markets. <br />
              Explore our global network and experience <br />a partnership
              engineered for excellence.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WelcomeText;
