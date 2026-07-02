import React from 'react'
import TopLeftLayout from '../headerComponents/topbar/leftLayout'
import TopMiddleLayout from '../headerComponents/topbar/middleLayout'
import TopRightLayout from '../headerComponents/topbar/rightLayout'
import Container from "../../globalComponents/Container";
import Drawer from '../drawer';
const MobileNavbar = () => {
  return (
    <div className="bg-black01 text-white01">
       <Container>
        <div >
          <TopLeftLayout />
          <TopMiddleLayout />
          <TopRightLayout />
        </div>
        
      </Container>
      <div className=" bg-black p-3">
          <Container>
            <Drawer/>
          </Container>
        </div>
      </div>
  )
}

export default MobileNavbar