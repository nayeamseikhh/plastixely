// import usaFlag from "../../../../assets/svg/Flag/usa.png";
// import euFlag from "../../../../assets/svg/Flag/eu.png";
// import { FaAngleDown } from "react-icons/fa";
// import { DownOutlined } from "@ant-design/icons";
// import { Dropdown, Space, Typography } from "antd";
// import { useState } from "react";
import GBP from "./GBP";
import USD from "./USD";
import EUR from "./EUR";

// const CurrencyBox = () => {
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
//       <div className="mt-5">
//         <div className="flex gap-x-3 h-10 w-full bg-white01 rounded-2xl items-center pl-5 cursor-pointer">
//           {/* Pound Part */}

//           {/* USD Part */}
//           {/* <img className="h-5 w-8 rounded-xs" src={usaFlag} alt="usaFlag" />
//           <p className="text-black01 font-poppins text-[14px]">
//             United Stares Doller ($) - USD
//           </p>
//           <div className="text-black01">
//             <FaAngleDown />
//           </div> */}

//           {/* <img className="h-5 w-8 rounded-xs" src={euFlag} alt="euFlag" />
//           <p className="text-black01 font-poppins text-[14px]">
//             Euro (€) - EUR
//           </p>
//           <div className="text-black01">
//             <FaAngleDown />
//           </div> */}
//           <Dropdown
//             menu={{
//               items,
//               selectable: true,
//               defaultSelectedKeys: ["3"],
//             }}
//             overlayClassName="custom-currency-dropdown"
//           >
//             <Typography.Link>
//               <Space>
//                 {selected} <DownOutlined />
//               </Space>
//             </Typography.Link>
//           </Dropdown>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CurrencyBox;

import React from "react";
import { Select } from "antd";

const CurrencyBox = () => {
  const currencyOptions = [
    {
      value: "gbp",
      label: <GBP />,
    },
    {
      value: "eur",
      label: <EUR />,
    },
    {
      value: "usd",
      label: <USD />,
    },
  ];
  return (
    <div className="mt-5 ">
      <div>
        <Select
          labelInValue
          defaultValue={{ value: "gbp", label: <GBP /> }}
          style={{ width: 120 }}
          onChange={() => {}}
          options={currencyOptions}
          classNames={{
            root: "custom-selector",
          }}
        />
      </div>
    </div>
  );
};

export default CurrencyBox;
