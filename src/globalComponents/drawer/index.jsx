import Logo from "../logo";
import InfoCheckout from "../headerComponents/middlebar/infoCheckout";
import { GiHamburgerMenu } from "react-icons/gi";
import { Dropdown, Space } from "antd";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const Drawer = () => {
  const { t } = useTranslation();
  const items = [
  {
    key: "1",
    label: (
      <Link
        to="/"
        className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 "
      >
        {t("start")}
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        to="/weclome-to-our-world"
        className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 "
      >
        {t("welcomeToOurWorld")}
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link
        to="/expertise"
        className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 "
      >
        {t("expertisePageTitle")}
      </Link>
    ),
  },
  {
    key: "4",
    label: t("category"),

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
            {t("automobile")}
          </a>
        ),
      },
      {
        key: "4-2",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            {t("motorcycle")}
          </a>
        ),
      },
      {
        key: "4-3",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            {t("powerTools")}
          </a>
        ),
      },
      {
        key: "4-4",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="">
            {t("landscapingTools")}
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
        {t("consultingServices")}
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link
        to="/get-in-touch"
        className="font-poppins cursor-pointer hover:text-orange01 transition-colors duration-300 "
      >
        {t("getInTouch")}
      </Link>
    ),
  },
  ];

  return (
    <div>
      <div className="grid grid-cols-[auto_auto_auto] gap-x-4 md:flex md:gap-x-6 items-center">
        <div className="md:mt-0 mt-2">
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
