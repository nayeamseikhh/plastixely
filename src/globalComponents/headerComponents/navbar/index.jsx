import Container from "../../Container";
import NavLeftLayout from "./navLeftLayout";
import NavRightLayout from "./navRightLayout";

const Navbar = () => {
  return (
    <>
      <div className="py-4 xl:py-5 bg-black">
        <Container>
          <div className="flex items-center justify-between gap-x-2 whitespace-nowrap text-[clamp(9px,0.95vw,16px)] 2xl:gap-x-3">
            <NavLeftLayout />
            <NavRightLayout />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
