import React from 'react'

const FooterLayout02 = () => {
  return (
    <div className='flex flex-col items-center text-white font-poppins font-semibold text-xl leading-7 '>
        <p className='text-white font-poppins font-semibold '>WELCOME TO OUR WORLD</p>
        <p className='text-white font-poppins font-semibold  my-2 -ml-18 xl:ml-0'>GET IN TOUCH</p>
        <p className='text-white font-poppins font-semibold  '>DELIVERY INFORMATION</p>
         <div className='flex flex-col items-center my-6 md:mt-30'>
              <h6>WORLDWIDE DELIVERY</h6>
              <br/>
              <p>-Royel Mail</p>
              <p > ( PARCEL FORCE )</p>
              <p>-DHL</p>
              <p>-DPD</p>
              <p>-UPS</p>
              <p>-Evri</p>
            </div>
    </div>
  )
}

export default FooterLayout02