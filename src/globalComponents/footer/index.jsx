import React from 'react'
import Container from '../Container'
import FooterLayout01 from './footerLayout01'
import FooterLayout02 from './footerLayout02'
import FooterLayout03 from './footerLayout03'
import FooterLayout04 from './footerLayout04'

const Footer = () => {
  return (
    <div className='py-20 bg-black01'>
      <Container>
        <div className='grid grid-cols-4 gap-10 text-white font-poppins font-semibold text-lg'>
          <FooterLayout01/>
          <FooterLayout02/>
          <FooterLayout03/>
          <FooterLayout04/>
        </div>
      </Container>
    </div>
  )
}

export default Footer