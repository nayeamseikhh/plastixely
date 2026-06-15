import React from "react";
import Container from "../../Container";
import TopLeftLayout from "./leftLayout";
import TopMiddleLayout from "./middleLayout";
import TopRightLayout from "./rightLayout";

const TopBar = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-3 ">
          <TopLeftLayout />
          <TopMiddleLayout />
          <TopRightLayout />
        </div>
      </Container>
    </>
  );
};

export default TopBar;
