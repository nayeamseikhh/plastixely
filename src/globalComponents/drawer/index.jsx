import React from "react";
import Logo from "../logo";
import InfoCheckout from "../headerComponents/middlebar/infoCheckout";
import { GiHamburgerMenu } from "react-icons/gi";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Category from "../headerComponents/navbar/navRightLayout/category";
import { Link } from "react-router";

const items = [
  {
    key: "1",
    label: (
      <Link
        to="/"
        className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 "
      >
        {" "}
        START
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        to=""
        className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 "
      >
        WELCOME TO OUR WORLD
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link
        to=""
        className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 "
      >
        OUR EXPERTISE
      </Link>
    ),
  },
  {
    key: "4",
    label: "CATEGORY",

    children: [
      {
        key: "4-1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href=""
            className="text-white01"
          >
            AUTOMOBILE
          </a>
        ),
      },
      {
        key: "4-2",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            MOTORCYCLE
          </a>
        ),
      },
      {
        key: "4-3",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            POWER TOOLS
          </a>
        ),
      },
      {
        key: "4-4",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            LANDSCAPING TOOLS
          </a>
        ),
      },
    ],
  },
  {
    key: "5",
    label: (
      <Link
        to=""
        className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 "
      >
        {" "}
        CONSULTING SERVICES
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link
        to="/get_in_touch"
        className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 "
      >
        GET IN TOUCH
      </Link>
    ),
  },
];

const Drawer = () => {
  return (
    <div>
      <div className="grid grid-cols-[auto_auto_auto] gap-x-2 md:flex md:gap-x-6 md:items-center">
        <div>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
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
  );
};

export default Drawer;
