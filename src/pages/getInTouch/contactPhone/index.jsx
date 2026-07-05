import React from 'react'
import Container from '../../../globalComponents/Container'
import OperatingHours from '../operatingHours'

const ContactPhone = () => {
  return (
    <>
    <Container>
        <div className="my-15 font-poppins text-start text-2xl leading-12 font-bold">
       
          <h2>
            CONNECT WITH US THROUGH THE FOLLOWING WAYS: <br />
            Contact us by Email: <br />
            <a href="mailto:info@plastixely.com">info@plastixely.com</a> <br />
            (Our team replies to all enquiries within one business day. ) <br />
            Contact us by Telephone: <br />
            For sales or general enquiries please contact our sales telephone number: <br />
            0000000000000  <br />
            Our Customer Service and Technical Help Phone Lines opening hours are as follows: <br />
          </h2>
           <div className='my-10'>
            <OperatingHours/>
           </div>
        </div>

        <div className="my-15 font-poppins text-start text-2xl leading-12 font-bold">
       
          <h2 className='font-poppins'>
            Contact us by WhatsApp: <br />
            <a href="https://wa.me/447741003192">+447741003192</a> <br />
            Contact us by Post: <br />
            If you need to write to us our postal address is : <br />
            FD PLASTIX, TOOLZ & SPAREZ LTD <br />
            THE STORAGE TEAM OF A.R.T. CENTRE TAN HOUSE LANE WIDNES <br />
            WA8 0RR <br />
            UNITED KINGDOM <br />
          </h2>
        </div>
    </Container>
    </>
  )
}

export default ContactPhone