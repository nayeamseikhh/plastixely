import Container from "../../Container";
import NavLeftLayout from "./navLeftLayout";
import NavRightLayout from "./navRightLayout";

const Navbar = () => {
  return (
    <>
      <div className="py-4 xl:py-5 bg-black">
        <Container>
          <div className=" flex md:gap-x-2  3xl:gap-x-4  md:text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-xl justify-between">
            <NavLeftLayout />
            <NavRightLayout />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
