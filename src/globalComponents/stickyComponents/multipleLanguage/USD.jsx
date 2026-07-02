import usaFlag from "../../../assets/svg/Flag/usa.png";

const USD = () => {
  return (
    <div className="flex gap-x-2 text-black ">
        <img className="h-5 w-8 rounded-xs" src={usaFlag} alt="usa flag" />
        <p>USD</p>
      
    </div>
  )
}

export default USD
