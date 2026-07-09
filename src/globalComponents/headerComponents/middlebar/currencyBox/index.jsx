import GBP from "./GBP";
import USD from "./USD";
import EUR from "./EUR";

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
