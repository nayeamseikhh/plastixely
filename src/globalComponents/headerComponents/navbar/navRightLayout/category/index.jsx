import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";

const Category = () => {
  const { t } = useTranslation();
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
        {t("automobile")}
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        {t("motorcycle")}
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        {t("powerTools")}
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        {t("landscapingTools")}
      </a>
    ),
  },
  ];

  return (
    <>
      <div>
        <Dropdown menu={{ items }} overlayClassName="custom-dropdown">
          <a onClick={(e) => e.preventDefault()}>
            <Space className="whitespace-nowrap">
              {t("category")}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </>
  );
};

export default Category;
