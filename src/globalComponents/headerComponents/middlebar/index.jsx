import Container from "../../Container";
import Logo from "../../logo";
import CurrencyBox from "./currencyBox";
import InfoCheckout from "./infoCheckout";
import SearchBox from "./searchBox";

const MiddleBar = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-[1fr_2fr_2fr_.85fr] gap-x-6 items-center  my-6">
          <Logo />
          <SearchBox />
          <CurrencyBox />
          <InfoCheckout />
        </div>
      </Container>
    </>
  );
};

export default MiddleBar;
