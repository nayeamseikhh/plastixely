// import React, { useState } from "react";
// import { Dropdown, Space, Typography } from "antd";
// import { DownOutlined, SmileOutlined } from "@ant-design/icons";
// import GBP from "./multipleCurrencies/GBP";
// import EUR from "./multipleCurrencies/EUR";
// import USD from "./multipleCurrencies/USD";

// const LanguageChange = () => {
//   const [selected, setSelected] = useState(<GBP />);
//   const items = [
//     {
//       key: "1",
//       label: <GBP />,
//       onClick: () => setSelected(<GBP />),
//     },
//     {
//       key: "2",
//       label: <EUR />,
//       onClick: () => setSelected(<EUR />),
//     },
//     {
//       key: "3",
//       label: <USD />,
//       onClick: () => setSelected(<USD />),
//     },
//   ];
//   return (
//     <>
//       <div className="fixed left-10 top-210 -translate-y-1/2 z-50">
//         <div className=" px-5 py-2 bg-white01 rounded-xl  top-0 z-50 shadow flex items-center gap-x-4 font-semibold">
//           <div>
//             <Dropdown
//               className="custom_lan_dropdown"
//               menu={{
//                 items,
//                 selectable: true,
//                 defaultSelectedKeys: ["6"],
//               }}
//               placement="top"
//               overlayClassName="custom-currency-dropdown"
//             >
//               <Typography.Link>
//                 <Space>{selected}</Space>
//               </Typography.Link>
//             </Dropdown>
//           </div>
//           {/* <p>EN</p> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default LanguageChange;

import { Select } from "antd";

const LanguageChange = () => {
  const languageChangeOptiion = [
    {
      value: "English",
      language: "en",
      label: (
        <div className="flex items-center gap-x-2  font-semibold ">
          <img
            src="https://flagcdn.com/gb.svg"
            alt="flag"
            className="w-10 h-7 font-semibold object-cover rounded-xs "
          />
          <span>English</span>
        </div>
      ),
    },

    {
      value: "French",
      language: "fr",
      label: (
        <div className="flex items-center gap-x-2  font-semibold ">
          <img
            src="https://flagcdn.com/fr.svg"
            alt="flag"
            className="w-10 h-7 object-cover rounded-xs"
          />
          <span>Frence</span>
        </div>
      ),
    },

    {
      value: "German",
      language: "de",
      label: (
        <div className="flex items-center gap-x-2  font-semibold ">
          <img
            src="https://flagcdn.com/de.svg"
            alt="flag"
            className="w-10 h-7 object-cover rounded-xs"
          />
          <span>German</span>
        </div>
      ),
    },

    {
      value: "Greek",
      language: "gr",
      label: (
        <div className="flex items-center gap-x-2  font-semibold ">
          <img
            src="https://flagcdn.com/gr.svg"
            alt="flag"
            className="w-10 h-7 object-cover rounded-xs"
          />
          <span>Greek</span>
        </div>
      ),
    },

    {
      value: "Spanish",
      language: "es",
      label: (
        <div className="flex items-center gap-x-2  font-semibold ">
          <img
            src="https://flagcdn.com/es.svg"
            alt="flag"
            className="w-10 h-7 object-cover rounded-xs"
          />
          <span>Spanish</span>
        </div>
      ),
    },

    {
      value: "Turkey",
      language: "tr",
      label: (
        <div className="flex items-center gap-x-2  font-semibold ">
          <img
            src="https://flagcdn.com/tr.svg"
            alt="flag"
            className="w-10 h-7 object-cover rounded-xs"
          />
          <span>Turkey</span>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="fixed left-35 top-210 -translate-y-1/2 z-50">
        <div className="rounded-xl shadow flex items-center gap-x-4 font-semibold">
          <div>
            <Select
              labelInValue
              defaultValue={{
                value: "EN",
                language: "en",
                label: (
                  <div className="flex items-center font-semibold gap-x-2">
                    <img
                      src="https://flagcdn.com/gb.svg"
                      alt="flag"
                      className="w-10 h-7 object-cover rounded-xs"
                    />
                    <span>English</span>
                  </div>
                ),
              }}
              style={{ width: 120 }}
              onChange={() => {}}
              options={languageChangeOptiion}
              popupAlign="top"
              classNames={{
                root: "custom-language",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageChange;
