import royel_mail from "../../../assets/shipmentIcon/royel_mail.jpeg"
import parcel_force from "../../../assets/shipmentIcon/parcel_force.jpeg"
import dhl from "../../../assets/shipmentIcon/dhl.jpeg"
import dpd from "../../../assets/shipmentIcon/dpd.jpeg"
import ups from "../../../assets/shipmentIcon/ups.jpeg"
import evri from "../../../assets/shipmentIcon/evri.jpeg"

const FooterLayout02 = () => {
  return (
    <div className='md:flex md:flex-col text-center items-center text-white font-poppins font-semibold text-xl leading-7 '>
        <p className='text-white font-poppins font-semibold '>WELCOME TO OUR WORLD</p>
        <p className='text-white font-poppins font-semibold  my-2 lg:-ml-18 xl:ml-0'>GET IN TOUCH</p>
        <p className='text-white font-poppins font-semibold  '>DELIVERY INFORMATION</p>
         <div className='flex flex-col items-center my-6 md:mt-30'>
              <h6>WORLDWIDE DELIVERY</h6> 
              <br/>
             <div  className='flex items-center gap-8 justify-center'>
               {/* <p>-Royel Mail</p>  */} <img className="w-16 h-10 rounded-sm object-cover p-1 bg-white" src={royel_mail} alt="Royel Mail" />
              {/* <p > ( PARCEL FORCE )</p> */} <img className="w-16 h-10 rounded-sm object-cover p-1 bg-white" src={parcel_force} alt="PARCEL FORCE" />
              {/* <p>-DHL</p> */} <img className="w-16 h-10 rounded-sm object-cover p-1 bg-white" src={dhl} alt="DHL" />
             </div>
             <div className='flex items-center gap-8 mt-8 justify-center'> 
              {/* <p>-DPD</p> */} <img className="w-16 h-10 rounded-sm object-cover p-1 bg-white" src={dpd} alt="DPD" />
              {/* <p>-UPS</p> */} <img className="w-16 h-10 rounded-sm object-cover p-1 bg-white" src={ups} alt="UPS" />
              {/* <p>-Evri</p> */} <img className="w-16 h-10 rounded-sm object-cover p-1 bg-white" src={evri} alt="Evri" /></div>
            </div>
    </div>
  )
}

export default FooterLayout02