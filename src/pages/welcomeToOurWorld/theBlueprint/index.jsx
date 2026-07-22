import React from "react";
import theBlueprint from "../../../assets/images/theBlueprint.jpeg";
import Container from "../../../globalComponents/Container";

const TheBluePrint = () => {
  return (
    <>
      <Container>
        <div className="mb-10">
          <h2 className="text-6xl font-semibold font-poppins my-10 text-center">
            THE BLUEPRINT
          </h2>
          <div className="md:grid grid-cols-2 gap-x-2">
            <div className="h-[90%] w-[90%]">
              <img src={theBlueprint} alt="" />
            </div>
            <div>
              <div>
                <h6 className="text-4xl font-semibold text-center font-poppins">
                  OUR MISSION
                </h6>
                <p className="text-3xl text-center mt-10 font-poppins">
                  To empower global industries by delivering <br />
                  high-quality mechanical components, hardware, <br />
                  and engineering consulting, ensuring operational <br />
                  excellence and seamless digital transformation <br />
                  through advanced CAD and BIM modelling.
                </p>
              </div>
              <div>
                <h6 className="text-4xl font-semibold text-center mt-40 font-poppins">
                  OUR VISION
                </h6>
                <p className="text-3xl text-center mt-10 font-poppins">
                  To be a world-leading enterprise that <br />
                  seamlessly bridges physical industrial <br />
                  supplies with virtual engineering <br />
                  expertise, driving sustainable global advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TheBluePrint;
