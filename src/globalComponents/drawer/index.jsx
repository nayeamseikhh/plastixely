import React from 'react'
import Logo from '../logo'
import InfoCheckout from '../headerComponents/middlebar/infoCheckout'
import { GiHamburgerMenu } from 'react-icons/gi'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Category from '../headerComponents/navbar/navRightLayout/category';
import { Link } from 'react-router';


const items = [
  {
    key: "1",
    label: (
      <Link
        to="/"
        className="font-poppins hover:text-orange01 transition-colors"
      >
        START
      </Link>
    ),
  },

  {
    key: "2",
    label: (
      <Link
        to="/welcome"
        className="font-poppins hover:text-orange01 transition-colors"
      >
        WELCOME TO OUR WORLD
      </Link>
    ),
  },

  {
    key: "3",
    label: (
      <Link
        to="/expertise"
        className="font-poppins hover:text-orange01 transition-colors"
      >
        OUR EXPERTISE
      </Link>
    ),
  },

  {
    key: "4",
    label: <Category />,
  },

  {
    key: "5",
    label: (
      <Link
        to="/consulting-services"
        className="font-poppins hover:text-orange01 transition-colors"
      >
        CONSULTING SERVICES
      </Link>
    ),
  },

  {
    key: "6",
    label: (
      <Link
        to="/get_in_touch"
        className="font-poppins hover:text-orange01 transition-colors"
      >
        GET IN TOUCH
      </Link>
    ),
  },
];
const Drawer = () => {
  return (
    <div>
        <div className="flex gap-x-6 items-center">
            <div>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={e => e.preventDefault()}>
                    <Space>
                        <GiHamburgerMenu size={20} />
                    </Space>
                    </a>
                </Dropdown>
            
            </div>
            
          <Logo />
          <InfoCheckout />
        </div>
    </div>
  )
}

export default Drawer