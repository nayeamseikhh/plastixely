import euFlag from "../../../assets/svg/Flag/eu.png";

const EUR = () => {
  return (
    <div className="flex gap-x-2 text-black mt-4"> 
        <img className="h-5 w-8 rounded-xs" src={euFlag} alt="euFlag" />
        <p> EU</p> 
     </div>
  )
}

export default EUR
