import React from 'react'
import Logo from '../logo'
import InfoCheckout from '../headerComponents/middlebar/infoCheckout'
import { GiHamburgerMenu } from 'react-icons/gi'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Category from '../headerComponents/navbar/navRightLayout/category';

const items = [
  {
    key: "1",
    label: (
      <a
        rel="noopener noreferrer"
        href="./"
        className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 "
      >
        START
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a  rel="noopener noreferrer" href="" className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 ">
        WELCOME TO OUR WORLD
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a  rel="noopener noreferrer" href="" className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 ">
        OUR EXPERTISE
      </a>
    ),
  },
  {
    key: "4",
    label: (
       <Category />
    ),
  },
  {
    key: "5",
    label: (
      <a  rel="noopener noreferrer" href="" className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 ">
        CONSULTING SERVICES
      </a>
    ),
  },
  {
    key: "6",
    label: (
      <a  rel="noopener noreferrer" href="/get_in_touch" className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 ">
        GET IN TOUCH
      </a>
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