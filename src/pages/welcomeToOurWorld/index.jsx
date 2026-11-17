import React from "react";
import Container from "../../globalComponents/Container";
import WelcomeToOurWorldBanner from "./banner";
import WelcomeText from "./welcomeText";
import TheBluePrint from "./theBlueprint";

const WelcomeToOurWorld = () => {
  return (
    <>
      <div>
        <WelcomeToOurWorldBanner />
        <WelcomeText />
        <TheBluePrint />
      </div>
    </>
  );
};

export default WelcomeToOurWorld;
