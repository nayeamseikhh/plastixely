import React from 'react'
import Container from '../Container'
import FooterLayout01 from './footerLayout01'
import FooterLayout02 from './footerLayout02'
import FooterLayout03 from './footerLayout03'
import FooterLayout04 from './footerLayout04'
import FooterTop from './footerTop'
import FooterText from './footerTop/footerText'
import visa from "../../assets/icon/visa.jpg"
import applePay from "../../assets/icon/apple-pay.png"
import mastercard from "../../assets/icon/mastercard02.svg"
import paypal from "../../assets/icon/paypal.png"
import googlePay from "../../assets/icon/gpay02.png"

const Footer = () => {
  return (
    <>
    
    <div className='py-10 bg-black01'>
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

    <div className='py-10 bg-black01'>
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
              <div className='flex gap-x-4 justify-center'>
                {/* <p>-Visa</p> */} <img className="w-16 h-10 rounded-sm object-cover p-1 bg-white" src={visa} alt="Visa" />
              {/* <p>-Apple Pay</p> */}<img className="w-16 h-10 rounded-sm bg-white object-cover p-1" src={applePay} alt="Apple Pay" />
              {/* <p>-Mastercard</p>  */} <img className="w-16 h-10 rounded-sm bg-white p-1" src={mastercard} alt="Mastercard" /> 
              </div>
              <div className='flex gap-x-4 justify-center my-4'>
              {/* <p>-PayPal</p>  */} <img className="w-16 h-10 rounded-sm bg-white p-1" src={paypal} alt="Paypal" />
              {/* <p>-Google Pay</p> */} <img className="w-16 h-10 rounded-sm bg-white p-1  object-contain" src={googlePay} alt="Google Pay" />
              </div>
            </div>
          </div>
        </Container>
    </div>

    <div className='bg-black01 py-10'>
      <Container>
      <div className="text-black">  <FooterText/></div>
    </Container>
    </div>
    </>
  )
}

export default Footer