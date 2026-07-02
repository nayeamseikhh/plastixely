
import Container from "../../../globalComponents/Container";
import ContactInformation from "./contactInformation";
import GetInTouchFormDesign from "./formDesign";

const Form = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between my-20 ">
          <ContactInformation />
          <GetInTouchFormDesign />
        </div>
        
      </Container>
    </>
  );
};

export default Form;
