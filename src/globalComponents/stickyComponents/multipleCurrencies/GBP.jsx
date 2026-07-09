import ukFlag from "../../../assets/svg/Flag/uk.svg";

const GBP = () => {
  return (
    <>
     <div className="flex gap-x-2 text-black -mb-4"> 
        <img className="h-5 w-8 rounded-xs" src={ukFlag} alt="ukFlag" />
        <p>EN</p> 
     </div>
    </>
  );
};

export default GBP;
