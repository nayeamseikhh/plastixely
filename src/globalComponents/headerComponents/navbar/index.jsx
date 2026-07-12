import Container from "../../Container";
import NavLeftLayout from "./navLeftLayout";
import NavRightLayout from "./navRightLayout";

const Navbar = () => {
  return (
    <>
      <div className="p-5 bg-black">
        <Container>
          <div className="flex  gap-x-8 justify-between">
            <NavLeftLayout />
            <NavRightLayout />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
