import React from 'react'
import Container from '../../../globalComponents/Container'
import OperatingHours from '../operatingHours'

const ContactPhone = () => {
  return (
    <>
    <Container>
        <div className="md:mt-8 mt-4 font-poppins md:text-start text-center p-1 md:text-2xl text-base md:leading-12 leading-8 font-bold">
       
          <h2>
            CONNECT WITH US THROUGH THE FOLLOWING WAYS: <br />
            Contact us by Email: <br />
            <a href="mailto:info@plastixely.com" className='text-blue01' ><u>info@plastixely.com</u></a> <br />
            (Our team replies to all enquiries within one business day. ) <br />
            Contact us by Telephone: <br />
            For sales or general enquiries please contact our sales telephone number: <br />
            0000000000000  <br />
            Our Customer Service and Technical Help Phone Lines opening hours are as follows: <br />
          </h2>
           <div className='my-5'>
            <OperatingHours/>
           </div>
        </div>

        <div className=" font-poppins md:text-start text-center p-1 md:text-2xl text-base md:leading-12 leading-8 font-bold">
       
          <h2 className='font-poppins'>
            Contact us by WhatsApp: <br />
            <a href="https://wa.me/447741003192" className='text-blue01'><u>+447741003192</u></a> <br />
            Contact us by Post: <br />
            If you need to write to us our postal address is : <br />
            FD PLASTIX, TOOLZ & SPAREZ LTD <br />
            THE STORAGE TEAM OF A.R.T. CENTRE <br />TAN HOUSE LANE <br /> WIDNES <br />
            WA8 0RR <br />
            UNITED KINGDOM <br />
          </h2>
        </div>
    </Container>
    <br />
    </>
  )
}

export default ContactPhone