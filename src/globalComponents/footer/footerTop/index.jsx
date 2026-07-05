import React from 'react'
import { HiMiniArrowTurnDownLeft } from 'react-icons/hi2'

const FooterTop = () => {
  return (
   <div className='md:grid md:grid-cols-2 gap-10 text-white font-poppins font-normal my-4'>
    <div>
        <h6 className='text-lg font-bold'>Keep up to date</h6>
        <p className='text-base font-normal my-4'>Be the first to know when we launch new deals, introduce new products or have news to share, straight to your inbox. </p>
    </div>
    <div>
        <label htmlFor="email" className='text-lg font-normal'>Your Email</label>
    <div className='flex items-center '> <input type="text" name="email" id="email" className="h-10 w-full bg-white my-4 px-4 rounded-sm text-black outline-none" placeholder='Email' />
     <span className='bg-primary text-white px-4 -ml-12 py-3 rounded-r-sm bg-red-500 cursor-pointer hover:bg-red-600 transition-all'><HiMiniArrowTurnDownLeft /></span></div>
    </div>
   </div>
  )
}

export default FooterTop