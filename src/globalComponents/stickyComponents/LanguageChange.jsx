import React, { useState } from "react";
import { Dropdown, Space, Typography } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import GBP from "./multipleLanguage/GBP";
import EUR from "./multipleLanguage/EUR";
import USD from "./multipleLanguage/USD";


const LanguageChange = () => {
    const [selected, setSelected] = useState(<GBP />);
  const items = [
    {
      key: "1",
      label: <GBP />,
      onClick: () => setSelected(<GBP />),
    },
    {
      key: "2",
      label: <EUR />,
      onClick: () => setSelected(<EUR />),
    },
    {
      key: "3",
      label: <USD />,
      onClick: () => setSelected(<USD />),
    },
  ];
  return (
    <>
      <div className="fixed left-10 top-210 -translate-y-1/2 z-50">
        <div className=" px-5 py-2 bg-white01 rounded-xl  top-0 z-50 shadow flex items-center gap-x-4 font-semibold">
          <div>
            <Dropdown
            className="custom_lan_dropdown"
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ["6"],
              
            }}
            placement="top"
            overlayClassName="custom-currency-dropdown"
          >
            <Typography.Link>
              <Space>
                {selected} 
              </Space>
            </Typography.Link>
          </Dropdown>
          </div>
          {/* <p>EN</p> */}
        </div>
      </div>
    </>
  );
};

export default LanguageChange;
