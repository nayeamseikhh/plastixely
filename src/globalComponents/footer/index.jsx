import React from 'react'
import Container from '../Container'
import FooterLayout01 from './footerLayout01'
import FooterLayout02 from './footerLayout02'
import FooterLayout03 from './footerLayout03'
import FooterLayout04 from './footerLayout04'
import FooterTop from './footerTop'
import FooterText from './footerTop/footerText'

const Footer = () => {
  return (
    <>
    <div className='bg-wgite py-20'>
      <Container>
      <div className="text-black my-10">  <FooterText/></div>
    </Container>
    </div>
    <div className='py-20 bg-black01'>
      <Container>
       
         <div className="text-white my-10 ">  <FooterTop/></div>
      </Container>
      <div className="border-t border-gray-600 my-10"></div>
      <Container>
        <div className='grid grid-cols-4 gap-10 '>
          <FooterLayout01/>
          <FooterLayout02/>
          <FooterLayout03/>
          <FooterLayout04/>
        </div>
      </Container>
    </div>

    <div className='py-20 bg-black01'>
        <Container>
          <div className='flex justify-center text-center gap-10 text-white text-xl font-semibold '>
            <div>
              <h6>WORLDWIDE DELIVERY</h6>
              <br/>
              <p>-Royel Mail</p>
              <p > ( PARCEL FORCE )</p>
              <p>-DHL</p>
              <p>-DPD</p>
              <p>-UPS</p>
              <p>-Evri</p>
            </div>
            <div>
              <h6>PAYMENT METHOD ACCEPTED</h6>
              <br/>
              <p>-Visa</p>
              <p>-Apple Pay</p>
              <p>-Mastercard</p>
              <p>-PayPal</p>
              <p>-Google Pay</p>
            </div>
          </div>
        </Container>
    </div>
    </>
  )
}

export default Footer