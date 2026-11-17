import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
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
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        MOTORCYCLE
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        POWER TOOLS
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        LANDSCAPING TOOLS
      </a>
    ),
  },
];
const Category = () => {
  return (
    <>
      <div>
        <Dropdown menu={{ items }} overlayClassName="custom-dropdown">
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              CATEGORY
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </>
  );
};

export default Category;
