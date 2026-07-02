import React from 'react'
import Logo from '../logo'
import InfoCheckout from '../headerComponents/middlebar/infoCheckout'
import { GiHamburgerMenu } from 'react-icons/gi'

const Drawer = () => {
  return (
    <div>
        <div className="flex gap-x-6 items-center">
            <GiHamburgerMenu size={20} />
          <Logo />
          <InfoCheckout />
        </div>
    </div>
  )
}

export default Drawer